import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
// import useRequestData from '../../components/hooks/useRequestData';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPokemonDetails } from '../../routes/coordinator';
// import { BASE_URL } from '../../constants/urls';
import { ContainerPokesScreens } from './stylesPokemonsScreen'

const PokemonsScreen = () => {
    const history = useHistory();
    const { states, setters } = useContext(GlobalStateContext)

    useEffect(() => {
        setters.setScreenCurrent("home")
    },[])
    
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

    const goToDetailsPokemon = (id) => {
        setters.setScreenCurrent("details")
        console.log("id details poke", id)
        goToPokemonDetails(history, id)
    }
 
    const componentepokemons = 
    states.pokeList &&
    states.pokeList.map((pokemon) => {
        return <PokemonCard 
            key={pokemon.id}
            page={"pokemonsScreen"} 
            dataPoke={pokemon} 
            onClickButtonAction={addPokeToPokedex}
            onClickButtonDetails={goToDetailsPokemon}
        /> 
    })


    return (
    <ContainerPokesScreens>
        {componentepokemons }
    </ContainerPokesScreens>
    );
}

export default PokemonsScreen;