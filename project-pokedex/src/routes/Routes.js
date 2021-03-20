import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Router = () => {
    // const [cart, setCart] = useState([]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
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