import React from 'react';
import Btn from './Btn.js';

function ModeTogger() {
    let Mode = true;
    const LighMode = 'ligh mode on';
    const DarkMode = 'dark mode on';

    function clickHandler(){
        Mode = !Mode;
        console.log(Mode);
    }

    return ( 
        <>
            {Mode ? DarkMode : LighMode}
            <button onClick={clickHandler}>
                Click me
            </button>
            
        </>
     );
}

export default ModeTogger;