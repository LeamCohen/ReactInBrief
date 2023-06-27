import React from 'react';
import Nav from './Nav';
import UserInteractor from './UserInteractor';

function Header(props) {
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
        <h1>{props.logStatus}</h1>
        <Nav/>
        <UserInteractor/>
      </div>
    );
  }
  
  export default Header;