import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPokemonDetails } from '../../routes/coordinator';
import { ContainerPokedexScreens } from './stylesPokedexScreen'

const PokedexScreen = () => {
  const history = useHistory();
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

  const goToDetailsPokemon = (id) => {
    console.log("id details poke", id)
    goToPokemonDetails(history, id)
  }

  const componentePokemonsPokedex = 
    states.pokedexList &&
    states.pokedexList.map((pokemon) => {
      return <PokemonCard 
        key={pokemon.id}
        page={"pokedexScreen"} 
        dataPoke={pokemon} 
        onClickButtonAction={removePokeFromPokedex}
        onClickButtonDetails={goToDetailsPokemon}
      /> 
  })

  return (
    <ContainerPokedexScreens>
      {componentePokemonsPokedex}
    </ContainerPokedexScreens>
  );
}

export default PokedexScreen;