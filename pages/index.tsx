import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import MainLayout from '../components/layouts/MainLayout'

const HomePage: NextPage = (props) => {

  console.log(props)

  return (
    <MainLayout title="All Pokemons">
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    }
  }
}
export default HomePage
