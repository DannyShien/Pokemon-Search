import React from './node_modules/react'; 
import './PokemonCard.css';

const PokemonCard = ({pokemonInfo, pokemonName, pokemonSprite, pokemonTypes}) => {
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