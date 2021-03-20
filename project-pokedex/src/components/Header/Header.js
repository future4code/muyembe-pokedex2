import React from 'react';
import { ContainerHeader, ButtonHeader, TitleHeader, ContainerButton, ContainerTitle } from './stylesHeader'

const Header = ({pageDisplay}) => {


  return (
    <ContainerHeader>
        <ContainerButton>
            <ButtonHeader>
                { pageDisplay === "home" 
                    ? "Ir para Pokedex" 
                    : "Voltar para lista de Pokemons"
                }
            </ButtonHeader>
        </ContainerButton>
        <ContainerTitle>
            <TitleHeader>
                { pageDisplay === "home" 
                    ? "Lista de pokemons" 
                    : "Pokedex"
                }
            </TitleHeader>
        </ContainerTitle>
      
    </ContainerHeader>
  );
}

export default Header;