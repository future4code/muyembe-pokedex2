import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToPodexScreen, goToPokemonsScreen } from '../../routes/coordinator';
import { ContainerHeader, ButtonHeader, TitleHeader, ContainerButton, ContainerTitle } from './stylesHeader'

const Header = ({screen, onClickButton}) => {
    const history = useHistory();
    const { states, setters } = useContext(GlobalStateContext)

    const onClickButtonHeader = () => {
        switch(screen) {
            case "home" :
                // setters.setScreenCurrent("pokedex")
                goToPodexScreen(history)
                break;
            case "pokedex":
                // setters.setScreenCurrent("home")
                goToPokemonsScreen(history)
                break;
            case "details":
                history.goBack();
                break;
        }
        // isHome ? goToPodexScreen(history) : goToPokemonsScreen(history)
        // onClickButton()
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
    switch(screen) {
        case 'home':
            titleHeaderPage = "Lista de Pokémons"
            break;
        case 'pokedex':
            titleHeaderPage = "Pokédex"
            break;
        case 'details':

            titleHeaderPage = states.pokeDetails.name.charAt(0).toUpperCase()+states.pokeDetails.name.substr(1)
            break;
    }

    return (
    <ContainerHeader>
        <ContainerButton>
            <ButtonHeader onClick={onClickButtonHeader}>
                {/* { isHome 
                    ? "Ir para Pokédex" 
                    : "Voltar para lista de Pokémons"
                } */}
                {titleButtonHeader}
            </ButtonHeader>
        </ContainerButton>
        <ContainerTitle>
            <TitleHeader>
                {/* { isHome 
                    ? "Lista de Pokémons" 
                    : "Pokédex"
                } */}
                {titleHeaderPage}
            </TitleHeader>
        </ContainerTitle>
        
    </ContainerHeader>
    );
}

export default Header;