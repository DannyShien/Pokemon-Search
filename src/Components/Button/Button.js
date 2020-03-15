import React from 'react';
import './Button.css'

const Button = ({text, style, type}) => {
    return (
        <button className='button' style={style} type={type}>
            {text}
        </button>
    ) 
};

export default Button;

