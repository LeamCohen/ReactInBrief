import React from 'react'

function Btn(props) {
    /*
    function clickHandler(){
        return props.mode = !props.mode;
    }*/ //onClick={clickHandler} in butn element
    return ( 
        <>
            <button>
                Click me
            </button>
        </>
     )
}
/*
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
*/

export default Btn;