import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GlobalStateContext from '../../global/GlobalStateContext';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../components/hooks/useRequestData';
import { ContainerContentePower, ContainerImagesPoke, ContainerPokeDetails, ContainerPowers, ImagePoke, NamePower, PowerNumber, TitlePower, ContainerContenteType, ContainerType, NameType, TitleTypes, ContainerAtacks, ContainerContenteAttacks, NameAttack, TitleAttacks, ContainerInfos} from './stylesPokemonDetails'

const PokemonDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const pathParams = useParams()
    // const [poke, setPoke] = useState({})
    const pokeData = useRequestData({}, `${BASE_URL}/pokemon/${pathParams.id}`);

    
    console.log("pathParams", pathParams)
    useEffect(() => {
        setters.setScreenCurrent("details")
    },[])

    // let listPowers
    // useEffect(() => {
    //     if(pokeData !== undefined && pokeData.stats !== undefined) {
    //         listPowers = 
    //         (pokeData && pokeData.stats)
    //         pokeData.stats.map((power, index) => {
    //             return <div key={index}> 
    //                 <h3>{power.stat.name}:</h3>
    //                 <h4>{power.base_stat}</h4>
    //             </div> 
    //         })
    //     }
       
    // }, [pokeData]);

    console.log("pokeData", pokeData)

    // let listPowers
    // if(pokeData !== undefined && pokeData.stats !== undefined) {
    //     listPowers = 
    //     (pokeData && pokeData.stats)
    //     pokeData.stats.map((power, index) => {
    //         return <div key={index}> 
    //             <h3>{power.stat.name}:</h3>
    //             <h4>{power.base_stat}</h4>
    //         </div> 
    //     })
    // }
    

    return (
        <ContainerPokeDetails>
           <ContainerImagesPoke>
                <ImagePoke src={(pokeData.sprites && pokeData.sprites.front_default)  && pokeData.sprites.front_default} />
                <ImagePoke src={(pokeData.sprites && pokeData.sprites.back_default) && pokeData.sprites.back_default} />
           </ContainerImagesPoke>
           <ContainerInfos>
                <ContainerPowers>
                    <TitlePower>Poderes :</TitlePower>
                    {/* { listPowers} */}
                    {(pokeData && pokeData.stats) &&
                            pokeData.stats.map((power, index) => {
                                return <ContainerContentePower key={index}> 
                                    <NamePower>{power.stat.name}:</NamePower>
                                    <PowerNumber>{power.base_stat}</PowerNumber>
                                </ContainerContentePower> 
                            })
                        }
                </ContainerPowers>
                <ContainerType>
                    <TitleTypes>Tipo :</TitleTypes>
                    {(pokeData && pokeData.types) &&
                            pokeData.types.map((item, index) => {
                                return <ContainerContenteType key={index}> 
                                    <NameType>{item.type.name}</NameType>
                                </ContainerContenteType> 
                            })
                        }
                </ContainerType>
                <ContainerAtacks>
                    <TitleAttacks>Principais ataques :</TitleAttacks>
                    {(pokeData && pokeData.moves) &&
                            pokeData.moves.map((item, index) => {
                                console.log("item", item)
                                if(index < 5) {
                                    return <ContainerContenteAttacks key={index}> 
                                        <NameAttack>{item.move.name}</NameAttack>
                                    </ContainerContenteAttacks> 
                                }
                                
                            })
                        }
                </ContainerAtacks>
           </ContainerInfos>
          
        </ContainerPokeDetails>
    );
}

export default PokemonDetails;