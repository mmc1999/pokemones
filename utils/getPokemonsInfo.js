import { pokeApi } from "../helpers";

export const getPokemonsInfo = async (nameOrId) => {
    const {data} = await pokeApi.get(`/pokemon/${nameOrId}`);
    return {
        id: data.id,
        name:data.name,
        sprites: data.sprites
    }
}