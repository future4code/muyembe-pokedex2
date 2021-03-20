import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/urls';

const PokemonsScreen = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios
            .get(`${BASE_URL}/pokemon`)
            .then((response) => {
                setPokemons(response.data.results)
            })
            .catch((error) => {
            alert("Ocorreu um erro, tente novamente");
        });
    },[]);

    console.log("pokemons", pokemons)
    return (
    <div>
        lista pokemons
    </div>
    );
}

export default PokemonsScreen;