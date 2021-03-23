import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../../components/hooks/useRequestData';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { BASE_URL } from '../../constants/urls';
import { ContainerPokesScreens } from './stylesPokemonsScreen'

const PokemonsScreen = () => {
    const dataPokemons = useRequestData({}, `${BASE_URL}/pokemon`);
    const [urlsPokemons, setUrlsPokemons] = useState([])
    // const [infosPokemon, setInfosPokemons ]= useState([])
    
    useEffect(() => {
        const newArrayUrlsPoke =
        (dataPokemons.results !== undefined) &&
             dataPokemons.results.map((pokemon) => {
                return pokemon.url
            })
        setUrlsPokemons(newArrayUrlsPoke)
        
    },[dataPokemons])
    
    const componentepokemons = 
    urlsPokemons &&
    urlsPokemons.map((urlPoke, index) => {
        return <PokemonCard 
            key={index} 
            urlPokemon={urlPoke} 
        /> 
    })

    return (
    <ContainerPokesScreens>
        {componentepokemons }
    </ContainerPokesScreens>
    );
}

export default PokemonsScreen;