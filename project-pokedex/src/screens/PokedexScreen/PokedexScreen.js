import React, { useContext } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import { ContainerPokedexScreens } from './stylesPokedexScreen'

const PokedexScreen = () => {
  const { states, setters } = useContext(GlobalStateContext)
  
  const removePokeFromPokedex = (dataPokemon) => {
    console.log("dataPokemon", dataPokemon)
    const newPokedexList = states.pokedexList.filter((pokemon) => {
      return pokemon.id !== dataPokemon.id
    })
    setters.setPokedexList(newPokedexList)

    addPokeToPokeList(dataPokemon)
  }

  const addPokeToPokeList = (dataPoke) => {
    const newPoke = dataPoke
    const newArrayPokeList = [...states.pokeList, newPoke ]
    setters.setPokeList(newArrayPokeList)
  }

  const componentePokemonsPokedex = 
    states.pokedexList &&
    states.pokedexList.map((pokemon) => {
      return <PokemonCard 
        key={pokemon.id}
        page={"pokedexScreen"} 
        dataPoke={pokemon} 
        onClickButtonAction={removePokeFromPokedex}
      /> 
  })

  return (
    <ContainerPokedexScreens>
      {componentePokemonsPokedex}
    </ContainerPokedexScreens>
  );
}

export default PokedexScreen;