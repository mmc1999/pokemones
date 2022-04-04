import { Card, Grid, Link } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

const FavoriteCardPokemon = ({id}) => {
    const router = useRouter();
    console.log(router)
    
    const onFavoriteClick = () => router.push(`/pokemon/${id}`)
    

  return (
    <>
        <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClick}>
            <Card hoverable clickable css={{padding:10}} >
                <Card.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={"100%"}
                    alt="imagen de pokemon"
                    height={140}
                />
            </Card>
        </Grid>
    </>
  )
}

export default FavoriteCardPokemon