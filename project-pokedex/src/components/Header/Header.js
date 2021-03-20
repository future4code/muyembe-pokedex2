import React from 'react';
import { useHistory } from 'react-router';
import { goToPodexScreen, goToPokemonsScreen } from '../../routes/coordinator';
import { ContainerHeader, ButtonHeader, TitleHeader, ContainerButton, ContainerTitle } from './stylesHeader'

const Header = ({isHome, onClickButton}) => {
    const history = useHistory();

    const onClickButtonHeader = () => {
        isHome ? goToPodexScreen(history) : goToPokemonsScreen(history)
        onClickButton()
    }

    return (
    <ContainerHeader>
        <ContainerButton>
            <ButtonHeader onClick={onClickButtonHeader}>
                { isHome 
                    ? "Ir para Pokédex" 
                    : "Voltar para lista de Pokémons"
                }
            </ButtonHeader>
        </ContainerButton>
        <ContainerTitle>
            <TitleHeader>
                { isHome 
                    ? "Lista de Pokémons" 
                    : "Pokédex"
                }
            </TitleHeader>
        </ContainerTitle>
        
    </ContainerHeader>
    );
}

export default Header;