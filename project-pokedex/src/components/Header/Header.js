import React from 'react';
import { ContainerHeader, ButtonHeader, TitleHeader, ContainerButton, ContainerTitle } from './stylesHeader'

const Header = ({isHome, onClickButton}) => {


  return (
    <ContainerHeader>
        <ContainerButton>
            <ButtonHeader onClick={onClickButton}>
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