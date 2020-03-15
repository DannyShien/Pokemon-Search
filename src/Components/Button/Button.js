import React from 'react';

const Button = ({text, style, type}) => {
    return (
        <input 
            className='button' 
            style={style} 
            type={type}
            text={text}
        />
    ) 
};

export default Button;

