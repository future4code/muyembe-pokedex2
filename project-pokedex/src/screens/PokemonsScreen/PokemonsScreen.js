import React, { useContext } from 'react';
// import useRequestData from '../../components/hooks/useRequestData';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
// import { BASE_URL } from '../../constants/urls';
import { ContainerPokesScreens } from './stylesPokemonsScreen'

const PokemonsScreen = () => {
    const { states, setters } = useContext(GlobalStateContext)
    console.log("states", states)
    console.log("setters", setters)
    
    const addPokeToPokedex = (dataPokemon) => {
        const newPoke = dataPokemon
        const newArrayListPokedex = [...states.pokedexList, newPoke ]
        setters.setPokedexList(newArrayListPokedex)
        removePokeFromPokeList(dataPokemon.id)
    }

    const removePokeFromPokeList = (idPoke) => {
        // console.log("idPoke", idPoke)
        const newPokeList = states.pokeList.filter((pokemon) => {
           return pokemon.id !== idPoke
        })

        setters.setPokeList(newPokeList)
    }
 
    const componentepokemons = 
    states.pokeList &&
    states.pokeList.map((pokemon) => {
        return <PokemonCard 
            key={pokemon.id}
            page={"pokemonsScreen"} 
            dataPoke={pokemon} 
            onClickButtonAction={addPokeToPokedex}
        /> 
    })


    return (
    <ContainerPokesScreens>
        {componentepokemons }
    </ContainerPokesScreens>
    );
}

export default PokemonsScreen;