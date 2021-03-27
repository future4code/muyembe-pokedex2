import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../hooks/useRequestData';
import { ButtonAddPokedex, ButtonDetails, ButtonsContainer, ImagePoke, ImagePokeContainer, PokeCardContainer } from './stylesPokemonCard'


const PokemonCard = ({ page, dataPoke, onClickButtonAction }) => {
    

    return (
        <PokeCardContainer>
            <ImagePokeContainer>
                <ImagePoke alt={"imagem"} src={(dataPoke.sprites && dataPoke.sprites.front_default)  && dataPoke.sprites.front_default }  />
            </ImagePokeContainer>
            <ButtonsContainer>
                <ButtonAddPokedex onClick={() => onClickButtonAction(dataPoke)}>
                    {(page === "pokemonsScreen") ? "Adicionar a Pokedex" : "Remover da Pokedex"}
                </ButtonAddPokedex>
                <ButtonDetails>Ver detalhes</ButtonDetails>
            </ButtonsContainer>
        </PokeCardContainer>
        
    );
}

export default PokemonCard;