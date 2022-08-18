import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { pokeApi } from '../../api';
import MainLayout from '../../components/layouts/MainLayout'
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const router = useRouter()

    console.log(pokemon)

    return (
        <MainLayout title="Algun Pokémon">
            <h1>{pokemon.name}</h1>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}`)

    return {
        paths: pokemons151.map( id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
      props: {
        pokemon: data
      }
    }
}

export default PokemonPage