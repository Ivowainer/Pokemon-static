import type { NextPage } from 'next'
import MainLayout from '../components/layouts/MainLayout'

const HomePage: NextPage = () => {
  return (
    <MainLayout title="All Pokemons">
      <h1>Hola Mundo</h1>
    </MainLayout>
  )
}

export default HomePage
