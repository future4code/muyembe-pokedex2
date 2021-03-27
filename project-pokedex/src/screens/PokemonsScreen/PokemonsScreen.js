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