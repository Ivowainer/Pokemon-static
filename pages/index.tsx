import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import MainLayout from '../components/layouts/MainLayout'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import Image from 'next/image'
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons[0])

  return (
    <MainLayout title="All Pokemons">
      <Grid.Container gap={ 2 } justify="center">

        {pokemons.map( ({ id, name, img,  url }) => (
          <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={id}>
            <Card isHoverable >
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={ img } width="100%" height={ 140 }/>
              </Card.Body>
              <Card.Footer>
                <Row justify='space-between'>
                  <Text>{name}</Text>
                  <Text>#{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}

      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}
export default HomePage
