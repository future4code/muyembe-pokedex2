import React from 'react';
import useRequestData from '../hooks/useRequestData';


const PokemonCard = ({urlPokemon}) => {
    const dataInfoPoke = useRequestData({}, `${urlPokemon}`);
    
    console.log("dataInfoPoke", dataInfoPoke)
    return (
    <div>
        <div>
            <img src={dataInfoPoke.sprites.front_default} alt={"imagem"} />
        </div>
        <div>
            <button>Adicionar a Pokedex</button>
            <button>Ver detalhes</button>
        </div>
    </div>
    );
}

export default PokemonCard;