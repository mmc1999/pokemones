import { Card, Grid } from '@nextui-org/react';
import { useState,useEffect } from 'react'
import { Layout } from '../../components/layouts'
import FavoritesPokemons from '../../components/pokemon/FavoritesPokemons';
import NoFavorites from '../../components/ui/NoFavorites'
import { pokemons, toggleFavorite } from '../../utils/localFavorites';

const Index = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    setFavoritePokemons(pokemons)
  }, [])

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemons.length === 0 
        ? <NoFavorites />
        : <FavoritesPokemons pokemons={favoritePokemons} />
      }
        
    </Layout>
  )
}

export default Index