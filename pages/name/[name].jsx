import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../../components/layouts'
import { existeEnFavorites, toggleFavorite } from '../../utils/localFavorites'
import conffeti from "canvas-confetti";
import { useState } from 'react'
import { getPokemonsInfo } from '../../utils/getPokemonsInfo'

const Name = ({pokemon}) => {
    const [isInFavorites, setIsInFavorites] =  useState(existeEnFavorites(pokemon.id))
    const onToggleFavorite = () => {
    toggleFavorite(pokemon.id)
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
    <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop:"5px"}} gap={2}>
          <Grid xs={12} sm={4}>
              <Card hoverable css={{padding:"30px"}}>
                  <Card.Body>
                    <Card.Image 
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                    height={200}
                    width="100%"
                    />
                  </Card.Body>
              </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display:"flex", justifyContent:"space-between"}} >
                <Text h1 transform='capitalize'>{Name.name}</Text>
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
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name} 
                    width={100}
                    height={100}
                    />
                    <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name} 
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

export default Name;

export const getStaticPaths = async (ctx) => {
 
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const posts = await data.json();
    return {
        paths:  posts.results.map(({name}) => ({
            params: {name}
        })),
        fallback: "blocking"
    }
}

export const getStaticProps = async (ctx) => {
  const pokemon = await getPokemonsInfo(ctx.params.name)
  if(!pokemon) {
    return {
      redirect: {
        destination:"/",
        permanent: false
      }
    }
  }
    return {
      props: {
          pokemon
      },
      revalidate: 86400
    }
  }
