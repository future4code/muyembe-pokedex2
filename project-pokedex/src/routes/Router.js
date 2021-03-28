import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import GlobalStateContext from '../global/GlobalStateContext';
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen';
import PokemonDetails from '../screens/PokemonDetails/PokemonDetails';
import PokemonsScreen from '../screens/PokemonsScreen/PokemonsScreen';
// import { goToPodexScreen, goToPokemonsScreen } from './coordinator';


const Router = () => {
    // const [isHome, setIsHome] = useState(true);
    const { states, setters } = useContext(GlobalStateContext)
    

    return (
        <BrowserRouter>
            <Header 
                screen={states.screenCurrent} 
            />
            <Switch>
                <Route exact path="/">
                    <PokemonsScreen />
                </Route>
                <Route exact path="/pokedex">
                    <PokedexScreen />
                </Route>
                <Route exact path="/pokemon/:id">
                    <PokemonDetails />
                </Route>
                <Route>
                    <div>Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;