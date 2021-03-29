import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPodexScreen, goToPokemonsScreen } from '../../routes/coordinator';
import { ContainerHeader, ButtonHeader, TitleHeader, ContainerButton, ContainerTitle, ButtonAddOrRemove, ContainerButtonAddOrRemove } from './stylesHeader'

const Header = ({screen, onClickButton}) => {
    const history = useHistory();
    const { states, setters } = useContext(GlobalStateContext)
    const {pokeSelectedToDetails, setPokeSelectedToDetails} = useState(states.pokeDetails)

    const onClickButtonHeader = () => {
        switch(screen) {
            case "home" :
                goToPodexScreen(history)
                break;
            case "pokedex":
                goToPokemonsScreen(history)
                break;
            case "details":
                history.goBack();
                break;
        }
    }

    const addPokeToPokedex = (dataPokemon) => {
        const newPoke = dataPokemon
        const newArrayListPokedex = [...states.pokedexList, newPoke ]
        setters.setPokedexList(newArrayListPokedex)
        removePokeFromPokeList(dataPokemon.id)
    }

    const addPokeToList = (dataPokemon) => {
        const newPoke = dataPokemon
        const newArrayList = [...states.pokeList, newPoke ]
        setters.setPokeList(newArrayList)
        removePokeFromPodex(dataPokemon.id)
    }

    const removePokeFromPokeList = (idPoke) => {
        const newPokeList = states.pokeList.filter((pokemon) => {
           return pokemon.id !== idPoke
        })

        setters.setPokeList(newPokeList)
    }

    const removePokeFromPodex = (idPoke) => {
        const newPodexList = states.pokedexList.filter((pokemon) => {
           return pokemon.id !== idPoke
        })

        setters.setPokedexList(newPodexList)
    }
    
    const addOrRemovePoke = (location) => {
        if(location === "lista") {
            addPokeToPokedex(states.pokeDetails)
            goToPodexScreen(history)
        } else {
            addPokeToList(states.pokeDetails)
            goToPokemonsScreen(history)
        }
    }
   
    let titleButtonHeader
    switch(screen) {
        case 'home':
            titleButtonHeader = "Ir para Pokédex"
            break;
        case 'pokedex':
            titleButtonHeader = "Voltar para lista de Pokémons"
            break;
        case 'details':
            titleButtonHeader = "Voltar"
            break;
    }

    let titleHeaderPage
    let buttonAddOrRemove
    switch(screen) {
        case 'home':
            titleHeaderPage = "Lista de Pokémons"
            break;
        case 'pokedex':
            titleHeaderPage = "Pokédex"
            break;
        case 'details':
            let pokePageLocation
            if(states.pokeDetails.name !== undefined) {
                titleHeaderPage = states.pokeDetails.name.charAt(0).toUpperCase()+states.pokeDetails.name.substr(1)

                const findPokemonInPokeList =
                states.pokeList.filter((poke) => {
                    if(poke.id === states.pokeDetails.id ) {
                        return true
                    } else {
                        return false
                    }
                })

                const findPokemonInPokedexList =
                states.pokedexList.filter((poke) => {
                    if(poke.id === states.pokeDetails.id ) {
                        return true
                    } else {
                        return false
                    }
                })

                if(findPokemonInPokeList.length > 0) {
                    pokePageLocation = "lista"
                } else {
                    pokePageLocation = "pokedex"
                }

                buttonAddOrRemove = <ButtonAddOrRemove onClick={() => addOrRemovePoke(pokePageLocation)}>{pokePageLocation === "lista" ? "Adiconar a Pokedex" : "Remover da Pokedex"}</ButtonAddOrRemove> 
            }
        
            break;
    }

    return (
    <ContainerHeader>
        <ContainerButton>
            <ButtonHeader onClick={onClickButtonHeader}>
                {titleButtonHeader}
            </ButtonHeader>
        </ContainerButton>
        <ContainerTitle>
            <TitleHeader>
                {titleHeaderPage}
            </TitleHeader>
        </ContainerTitle>
        <ContainerButtonAddOrRemove>
            {buttonAddOrRemove}
        </ContainerButtonAddOrRemove>
    </ContainerHeader>
    );
}

export default Header;