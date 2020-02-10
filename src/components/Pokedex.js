import React, { Component } from 'react';
import './Pokedex.css' 
import Search from './Search';
import PokemonCard from './PokemonCard';


class Pokedex extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            results: {},
            name: '',
            id: '',
            sprite: '',
            types: ''
        }
    }

    componentDidMount () {
        this.searchPokemonData()
    }

    searchPokemonData = (query) => {
        if (query) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                .then(r => { return r.json() })
                .catch(err => { console.log(err) })
                .then(data => { this.setState({ results: data }) })
                // .then(this.renderPokemonData)
        }
    }

    renderPokemonData = () => {
        const { results } = this.state
        // console.log(`rendering results..`, results)
        let pokemonName = results.name
        let pokemonId = results.id
        let pokemonSprite = results.sprites.front_default

        let whichTypes = results.types.map(types => {
            let whichType = types.slot
            if (whichType === 1) {return types.type}
            return whichType
        })
        console.log(whichTypes)
        let pokemonTypes = whichTypes.map(type => {
            let pokemonType = type.name
            return pokemonType
        })

        this.setState({
            name: pokemonName,
            id: pokemonId,
            sprite: pokemonSprite,
            types: pokemonTypes
        })
    }

    render() {
        // ==================WHY DOES THIS NOT WORK??======================= 
        // ================================================================= 
        // Unable to use .map() to map over array...line 68,
        // is this due to the fact that the initial render is "undefined"? why??

        const { results } = this.state
        console.log(`initial render..`, results)
        let pokemonName = results.name
        console.log(`pokemon name..`, results.name)
        let pokemonId = results.id
        console.log(`pokemon id..`, results.id)
        // let pokemonTypes = results.types
        let pokemonTypes = Array.isArray(results.types) && results.types.map()
        console.log(`pokemon types..`, pokemonTypes)

        // At the end of this all, I just added name, id, sprite and types
        // to my state. But I was trying to see if I could just have one state
        // as result: {} and be able to grab the values I wanted and pass them along. 
        // ================================================================= 
        // ================================================================= 

        return (
            <>
                <div className='search-container'>
                   <Search fetch={this.searchPokemonData} />
                </div>
                <div className='pokemon-card'>
                    {this.state.results.id ?  
                        <PokemonCard
                            pokemonInfo={this.state.results}
                            pokemonName={this.state.name}
                            pokemonSprite={this.state.sprite}
                            pokemonTypes={this.state.types}
                        />
                    : null}
                </div>
            </>
        );
    }
}

export default Pokedex;
