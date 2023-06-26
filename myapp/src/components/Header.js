import React from 'react';
import Nav from './Nav';
import UserInteractor from './UserInteractor';

function Header() {
  const headerStyle = {
    backgroundColor: 'gray',
    margin:'0',
    padding:'0',
    width:'100%',
    height: '10%',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }//all values are in strings and the - is   not present anymore we put jst a capital lettr instead
    return (
      <div 
        style={headerStyle}
        className="Header">
        <img src="" alt="" />
        <Nav first='Home' second='About' third='Profile'/>
        <UserInteractor/>
      </div>
    );
  }
  
  export default Header;