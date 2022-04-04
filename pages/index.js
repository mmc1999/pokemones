import { Grid} from "@nextui-org/react";
import {Layout} from "../components/layouts";
import {PokemonCard} from "../components/pokemon";
import { pokeApi } from "../helpers";

export default function Home({resp}) {
  console.log(resp)

  return (
    <Layout title="bulbasor">
      <Grid.Container gap={2} justify="flex-start">
        {
          resp.map(el =>(
            <PokemonCard key={el.id} el={el} />
          ))
        }
      </Grid.Container>
      
    </Layout>
  )
}

export async function getStaticProps(context) {
  const {data} = await pokeApi.get("/pokemon?limit=151");
  const resp = data.results.map((el,i) => 
    ({
      ...el, 
      id:i+1,
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    })
  )

  return {
    props: {resp}, // will be passed to the page component as props
  }
}