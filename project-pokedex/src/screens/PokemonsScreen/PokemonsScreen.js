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
    // const dataPokemons = useRequestData({}, `${BASE_URL}/pokemon`);
    // const [urlsPokemons, setUrlsPokemons] = useState([])
    // const [pokeList, setPokeList ]= useState([])
    // const [pokedexList, setPokedexList ]= useState([])
    
    // useEffect(() => {
    //     const newArrayUrlsPoke =
    //     (dataPokemons.results !== undefined) &&
    //          dataPokemons.results.map((pokemon) => {
    //             return pokemon.url
    //         })
    //     setUrlsPokemons(newArrayUrlsPoke)
        
    // },[dataPokemons])

    // const getPokeInfos = async (url) => {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     return data
    // }

    // useEffect(() => {
    //     let pokeListInfos
    //     if(urlsPokemons.length > 0) {
    //         pokeListInfos = urlsPokemons.map(async pokeUrl => {
    //             const infoPoke = await getPokeInfos(pokeUrl);
    //             return infoPoke;
    //         });

    //         (async () => {
    //         const resultado = await Promise.all(pokeListInfos);
    //         setPokeList(resultado)
    //         })();
    //     }
    // },[urlsPokemons])

    const addPokeToPokedex = (dataPokemon) => {
        // const newPoke = dataPokemon
        // const newArrayListPokedex = [...pokedexList, newPoke ]
        // setPokedexList(newArrayListPokedex)
    }
 
    const componentepokemons = 
    states.pokeList &&
    states.pokeList.map((pokemon) => {
        return <PokemonCard 
            key={pokemon.id} 
            dataPoke={pokemon} 
            onClickAddPokedex={addPokeToPokedex}
        /> 
    })


    return (
    <ContainerPokesScreens>
        {componentepokemons }
    </ContainerPokesScreens>
    );
}

export default PokemonsScreen;