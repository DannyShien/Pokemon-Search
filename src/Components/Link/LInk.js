import React from 'react';
import './Link.css';

const Link = ({to, style, text}) => {
    return (
        <Link className='link' to={to}>
            {text}
        </Link>
    )
};

export default Link;