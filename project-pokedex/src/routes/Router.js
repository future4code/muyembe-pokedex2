import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import PokemonsScreen from '../screens/PokemonsScreen/PokemonsScreen';


const Router = () => {
    // const [cart, setCart] = useState([]);

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <PokemonsScreen />
                    {/* <ProductsScreen cart={cart} setCart={setCart}  /> */}
                </Route>
                <Route exact path="/pokedex">
                    {/* <CartScreen cart={cart} setCart={setCart} /> */}
                </Route>
                <Route>
                    <div>Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;