import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Pokedex from '../Containers/Pokedex/Pokedex';

const Route = () => {
    <Switch>
        <Route exact path='/' component={Pokedex} />
    </Switch>
};

export default Route;