import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../hooks/useRequestData';
// import useRequestData02 from '../hooks/useRequestData02';
import { ButtonAddPokedex, ButtonDetails, ButtonsContainer, ImagePoke, ImagePokeContainer, PokeCardContainer } from './stylesPokemonCard'


const PokemonCard = ({urlPokemon}) => {
    const dataInfoPoke = useRequestData([], urlPokemon);
    

    return (
        <PokeCardContainer>
            <ImagePokeContainer>
                <ImagePoke alt={"imagem"} src={(dataInfoPoke.sprites && dataInfoPoke.sprites.front_default)  && dataInfoPoke.sprites.front_default }  />
            </ImagePokeContainer>
            <ButtonsContainer>
                <ButtonAddPokedex>Adicionar a Pokedex</ButtonAddPokedex>
                <ButtonDetails>Ver detalhes</ButtonDetails>
            </ButtonsContainer>
        </PokeCardContainer>
        
    );
}

export default PokemonCard;