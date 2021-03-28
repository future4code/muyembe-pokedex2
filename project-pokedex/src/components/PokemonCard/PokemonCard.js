import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import useRequestData from '../hooks/useRequestData';
import { ButtonAddPokedex, ButtonDetails, ButtonsContainer, ImagePoke, ImagePokeContainer, PokeCardContainer } from './stylesPokemonCard'


const PokemonCard = ({ page, dataPoke, onClickButtonAction, onClickButtonDetails }) => {
    const { states, setters } = useContext(GlobalStateContext)

    const onClickButtonDetailsPokeCard = () => {
        setters.setPokeDetails(dataPoke)
        onClickButtonDetails(dataPoke.id)
    }

    return (
        <PokeCardContainer>
            <ImagePokeContainer>
                <ImagePoke alt={"imagem"} src={(dataPoke.sprites && dataPoke.sprites.front_default)  && dataPoke.sprites.front_default }  />
            </ImagePokeContainer>
            <ButtonsContainer>
                <ButtonAddPokedex onClick={() => onClickButtonAction(dataPoke)}>
                    {(page === "pokemonsScreen") ? "Adicionar a Pokedex" : "Remover da Pokedex"}
                </ButtonAddPokedex>
                <ButtonDetails onClick={ onClickButtonDetailsPokeCard }>Ver detalhes</ButtonDetails>
            </ButtonsContainer>
        </PokeCardContainer>
        
    );
}

export default PokemonCard;