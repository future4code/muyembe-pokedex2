import React, { useContext, useEffect } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

const PokemonDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    
    useEffect(() => {
        setters.setScreenCurrent("details")
    },[])

    return (
        <div>
            Poke Details
        </div>
    );
}

export default PokemonDetails;