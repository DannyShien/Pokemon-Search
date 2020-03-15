import React from 'react'; 
import './PokemonCard.css';
import Image from '../Image/Image';

const PokemonCard = ({pokemonInfo, pokemonName, pokemonSprite, pokemonTypes}) => {
        return ( 
            <div className='card-detail'>
                <div>
                    <Image 
                        src={pokemonSprite} 
                        alt={pokemonName}
                        style={{
                            height: '75%',
                            width: 'auto'
                        }}   
                    />
                    <p>{`No. ${pokemonInfo.id}`}</p>
                    <h5>{pokemonName}</h5>
                    <p>{pokemonTypes}</p>
                </div>
            </div>
        )
       
};

export default PokemonCard;