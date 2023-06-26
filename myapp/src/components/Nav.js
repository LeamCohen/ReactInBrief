import React from 'react'

function Nav(props) {
    const navStyle = {
        backgroundColor : 'light-gray',
    }
    return ( 
        <nav 
            style={navStyle}
            className='main-nav'
            >
            <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
            </ul>
        </nav>
    );
}

export default Nav;