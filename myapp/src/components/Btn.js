import React from 'react'
/*
function Btn() {
    const clickHandler = () => console.log('clicked');
    return ( 
        <>
            <button onClick={clickHandler}>
                Click me
            </button>
        </>
     );
}
*/

function Btn() {
    const clickHandler = () => console.log('Over');
    return ( 
        <>
            <button onMouseOver={clickHandler}>
                Click me
            </button>
        </>
     );
}

export default Btn;