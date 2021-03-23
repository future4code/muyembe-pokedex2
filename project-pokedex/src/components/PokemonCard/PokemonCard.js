import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRequestData from '../hooks/useRequestData';
// import useRequestData02 from '../hooks/useRequestData02';
import { ButtonAddPokedex, ButtonDetails, ButtonsContainer, ImagePoke, ImagePokeContainer, PokeCardContainer } from './stylesPokemonCard'


const PokemonCard = ({urlPokemon}) => {
    console.log("urlPokemon", urlPokemon)
    const dataInfoPoke = useRequestData([], urlPokemon);
    // const [urlImagePoke, setUrlImagePoke] = useState("")

    // useEffect(() => {
    //     const likImagemPokemon = dataInfoPoke.sprites.front_default
    //     setUrlImagePoke(likImagemPokemon)
    // }, [dataInfoPoke])
    
    // const [data, setData] = useState({})
    
    // useEffect(() => {
    //     axios
    //       .get(`${urlPokemon}`)
    //       .then((response) => {
    //         console.log("response", response)
    //         setData(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         alert("Ocorreu um erro, tente novamente");
    //       });
    // }, [urlPokemon]);

    // useEffect(() => {
    //     getInfoPokemon()
    // }, []);
    
    // console.log("dataInfoPoke", dataInfoPoke)
    // console.log("data", data)

    // const getInfoPokemon = async () => {
    //     try{
    //         const response = await axios.get(`${urlPokemon}`)
    //         setData(response.data)
    //     }catch(error) {
    //         console.log(error.response)
    //     }
    // }

    // const componentInfoPoke = 
    // dataInfoPoke.sprites &&
    //     <PokeCardContainer>
    //         <ImagePokeContainer>
    //             <ImagePoke src={dataInfoPoke.sprites.front_default} alt={"imagem"} />
    //         </ImagePokeContainer>
    //         <ButtonsContainer>
    //             <ButtonAddPokedex>Adicionar a Pokedex</ButtonAddPokedex>
    //             <ButtonDetails>Ver detalhes</ButtonDetails>
    //         </ButtonsContainer>
    //     </PokeCardContainer>

   


    console.log("dataInfoPoke", dataInfoPoke)
    return (
        <PokeCardContainer>
            <ImagePokeContainer>
                <ImagePoke alt={"imagem"} src={(dataInfoPoke.sprites && dataInfoPoke.sprites.front_default)  ? dataInfoPoke.sprites.front_default : "sem imagem"}  />
            </ImagePokeContainer>
            <ButtonsContainer>
                <ButtonAddPokedex>Adicionar a Pokedex</ButtonAddPokedex>
                <ButtonDetails>Ver detalhes</ButtonDetails>
            </ButtonsContainer>
        </PokeCardContainer>
        
    );
}

export default PokemonCard;