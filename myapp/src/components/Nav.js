import React from 'react';
import { Link } from 'react-router-dom'; 

function Nav(props) {
    const navStyle = {
        backgroundColor : 'light-gray',
    }
    return ( 
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
}

export default Nav;