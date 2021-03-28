import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants/urls';
import useRequestData from "../components/hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const dataPokemons = useRequestData({}, `${BASE_URL}/pokemon`);
    const [urlsPokemons, setUrlsPokemons] = useState([])
    const [pokeList, setPokeList ]= useState([])
    const [pokedexList, setPokedexList ]= useState([])
    const [screenCurrent, setScreenCurrent] = useState("home");
    const [pokeDetails, setPokeDetails] = useState({})

    useEffect(() => {
        const newArrayUrlsPoke =
        (dataPokemons.results !== undefined) &&
             dataPokemons.results.map((pokemon) => {
                return pokemon.url
            })
        setUrlsPokemons(newArrayUrlsPoke)
        
    },[dataPokemons])

    const getPokeInfos = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    useEffect(() => {
        let pokeListInfos
        if(urlsPokemons.length > 0) {
            pokeListInfos = urlsPokemons.map(async pokeUrl => {
                const infoPoke = await getPokeInfos(pokeUrl);
                return infoPoke;
            });

            (async () => {
            const resultado = await Promise.all(pokeListInfos);
            setPokeList(resultado)
            })();
        }
    },[urlsPokemons])
  
    const states = { pokeList, pokedexList, screenCurrent, pokeDetails };
    const setters = { setPokeList, setPokedexList, setScreenCurrent, setPokeDetails };
    
    const data = { states, setters };

    return (
    <GlobalStateContext.Provider value={pokeList && data}>
        {props.children}
    </GlobalStateContext.Provider>
    );

};

export default GlobalState;
