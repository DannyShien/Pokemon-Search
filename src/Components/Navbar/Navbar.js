import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({style}) => {
    return (
        <div className='navbar'>
            <Link to='/' text='Home' />
            <Link to='#' text='Pokemon' />
        </div>
    )
};

export default Navbar;