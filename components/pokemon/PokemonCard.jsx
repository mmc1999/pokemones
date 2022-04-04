import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

export const PokemonCard = ({el}) => {
    
    const router = useRouter()
    
    const handleClick = () => {
        router.push(`/name/${el.name}`)
    }

  return (
            <Grid xs={6} sm={3} md={2} xl={1} key={el.id} onClick={handleClick}>
              <Card hoverable clickable>
                <Card.Body css={{p:1}}>
                  <Card.Image src={el.image} width="100%" height={140}/>
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{el.name}</Text>
                    <Text>{el.id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
  )
}
