import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../../components/hooks/useRequestData';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { BASE_URL } from '../../constants/urls';
import { ContainerPokesScreens } from './stylesPokemonsScreen'

const PokemonsScreen = () => {
    const dataPokemons = useRequestData({}, `${BASE_URL}/pokemon`);
    const [urlsPokemons, setUrlsPokemons] = useState([])
    const [pokeList, setPokeList ]= useState([])
    // const [pokedexList, setPokedexList ]= useState([])
    
    useEffect(() => {
        const newArrayUrlsPoke =
        (dataPokemons.results !== undefined) &&
             dataPokemons.results.map((pokemon) => {
                return pokemon.url
            })
        setUrlsPokemons(newArrayUrlsPoke)
        
    },[dataPokemons])

    // const addToPodex = (dataPokemon) => {
    //     console.log("dataPokemon", dataPokemon)
    // }
    
    // const createListPokemons = (dataPokemonList) => {
    //     console.log("dataPokemonList", dataPokemonList)
    //     const newListPokemons = [...pokeList, dataPokemonList] 
    //     setPokeList(newListPokemons)
    // }
    
    
    const componentepokemons = 
    urlsPokemons &&
    urlsPokemons.map((urlPoke, index) => {
        return <PokemonCard 
            key={index} 
            urlPokemon={urlPoke} 
            onClickAddPokedex={""}
            insertList={""}
        /> 
    })

    
    console.log("pokeList", pokeList)
    return (
    <ContainerPokesScreens>
        {componentepokemons }
    </ContainerPokesScreens>
    );
}

export default PokemonsScreen;