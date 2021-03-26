import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../hooks/useRequestData';
import { ButtonAddPokedex, ButtonDetails, ButtonsContainer, ImagePoke, ImagePokeContainer, PokeCardContainer } from './stylesPokemonCard'


const PokemonCard = ({urlPokemon, onClickAddPokedex, insertList}) => {
    const dataInfoPoke = useRequestData([], urlPokemon);
    
   
    useEffect(() => {
        dataInfoPoke && insertList(dataInfoPoke)
    },[dataInfoPoke])

    return (
        <PokeCardContainer>
            <ImagePokeContainer>
                <ImagePoke alt={"imagem"} src={(dataInfoPoke.sprites && dataInfoPoke.sprites.front_default)  && dataInfoPoke.sprites.front_default }  />
            </ImagePokeContainer>
            <ButtonsContainer>
                <ButtonAddPokedex onClick={() => onClickAddPokedex(dataInfoPoke)}>
                    Adicionar a Pokedex
                </ButtonAddPokedex>
                <ButtonDetails>Ver detalhes</ButtonDetails>
            </ButtonsContainer>
        </PokeCardContainer>
        
    );
}

export default PokemonCard;