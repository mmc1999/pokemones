import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import React from 'react'
import { useState } from 'react';
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../helpers';
import { existeEnFavorites, toggleFavorite } from '../../utils/localFavorites';
import conffeti from "canvas-confetti";
import { getPokemonsInfo } from '../../utils/getPokemonsInfo';

const PokemonPage = ({pokemons}) => {
  const [isInFavorites, setIsInFavorites] =  useState(existeEnFavorites(pokemons.id))
  const onToggleFavorite = () => {
    toggleFavorite(pokemons.id)
    setIsInFavorites(!isInFavorites)
    if(isInFavorites) return
    
    conffeti({
      zIndex:999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin: {
        x:1,
        y:0
      }
    })
    
  }

  return (
    <Layout title={pokemons.name}>
        <Grid.Container css={{ marginTop:"5px"}} gap={2}>
          <Grid xs={12} sm={4}>
              <Card hoverable css={{padding:"30px"}}>
                  <Card.Body>
                    <Card.Image 
                    src={pokemons.sprites.other.dream_world.front_default}
                    alt={pokemons.name}
                    height={200}
                    width="100%"
                    >
                      
                    </Card.Image>
                  </Card.Body>
              </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display:"flex", justifyContent:"space-between"}} >
                <Text h1 transform='capitalize'>{pokemons.name}</Text>
                <Button
                  color="gradient"
                  ghost={!isInFavorites}
                  onClick={onToggleFavorite}>
                    {isInFavorites ? "En favoritos" : "Guardar en favoritos"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites: </Text>
                <Container display='flex' direction='row'>
                  <Image
                    src={pokemons.sprites.front_default}
                    alt={pokemons.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemons.sprites.back_default}
                    alt={pokemons.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemons.sprites.front_shiny}
                    alt={pokemons.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemons.sprites.back_shiny}
                    alt={pokemons.name} 
                    width={100}
                    height={100}
                    />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
     const pokemon151 = [...Array(151)].map((value, index) => `${index+1}`)

    return {
        paths: pokemon151.map(id=> ({
            params: {id}
        })),
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    return {
      props: {
          pokemons: await getPokemonsInfo(ctx.params.id)
      }, // will be passed to the page component as props
    }
  }

export default PokemonPage