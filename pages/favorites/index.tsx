import { useState, useEffect } from 'react';

import { localFavorites } from '../../utils';

import MainLayout from "../../components/layouts/MainLayout"
import NoFavorites from '../../components/pokemon/NoFavorites';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons )
  }, [])
  

  return (
    <MainLayout title="Pokémons - Favorites">
      { favoritePokemons.length === 0 ? 
        ( <NoFavorites /> ) : 
        ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
    </MainLayout>
  )
}

export default FavoritesPage