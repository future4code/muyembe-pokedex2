import styled from 'styled-components'

export const ContainerHeader = styled.div`
    height: 50px;
    background-color: #30a7d7;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ContainerButton = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`

export const ButtonHeader = styled.button`
   margin: 0 16px;
   padding: 4px 8px;
   border-radius: 8px;
   border: none;
   cursor: pointer;
`;

export const ContainerTitle = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TitleHeader = styled.h1`
    color: white;
`;