import { Grid } from '@nextui-org/react'
import React from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

const FavoritesPokemons = ({pokemons}) => {
  return (
    <>
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            {
              pokemons.map(id => (
                <FavoriteCardPokemon key={id} id={id} />
              ))
            }
          </Grid.Container>
    </>
  )
}

export default FavoritesPokemons