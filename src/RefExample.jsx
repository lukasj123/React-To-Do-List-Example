import { useRef } from 'react';

function FancyInput() {

    // useRef can be blank, but you can also
    // add a default value in the ()
    const inputRef = useRef();

    function printChange() {
        console.log("Changed")
        console.log(inputRef.current.value)
    }

    return(
        <>
        <h1>Fancy Input:</h1>
        <input ref={inputRef} onChange={printChange}/>
        </>
    );
}

export default FancyInput