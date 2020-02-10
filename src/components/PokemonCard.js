import React from 'react'; 
import './PokemonCard.css';

const PokemonCard = ({pokemonInfo, pokemonName, pokemonSprite, pokemonTypes}) => {
        console.log(pokemonTypes)
        // If I try to iterate over pokemonTypes(array), I'll get a...
        // "Unhandled Rejection (TypeError): Cannot read property ‘map’ of undefined"
        // I know that line 5 will console log undefined on first render
        return ( 
            <div className='card-detail'>
                <div>
                    <img src={pokemonSprite} alt={pokemonName} />
                    <p>{`No. ${pokemonInfo.id}`}</p>
                </div>
                <div>
                    <h4>{pokemonName}</h4>
                    <p>{pokemonTypes}</p>
                </div>
            </div>
        )
       
};

export default PokemonCard;