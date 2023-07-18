import { useState } from 'react'

function App2() {
// count -> reference to the value of our variable
// setCount -> callback fxn that we have to use if we want
// to update our 'count' state. Lets react know our state
// variable has changed and that we need to rerender the
// DOM with our new value in mind

    const [count, setCount] = useState(0);

    function handleIncrement() {        
        setCount(count+1)
    }

    return(
        <>
        <h1>Example of state/props update: {count}</h1>
        <button onClick={() => handleIncrement()}>Add to count</button>
        <button onClick={() => setCount(0)}>Rest counter</button>
        <input onChange={handleIncrement} placeholder="Magical input; beware"/>
        </>
    )
}

export default App2