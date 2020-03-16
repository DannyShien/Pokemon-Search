import React from 'react';
import { BrowserRouter as Router, 
    Route
} from 'react-router-dom';
import './App.css';
import Pokedex from './Containers/Pokedex/Pokedex';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Pokemon: Data Search</h1>
                <Route exact path='/' component={Pokedex} />
            </div>
        </Router>
    );
}

export default App;
