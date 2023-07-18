import { useEffect } from 'react';
import { useState } from 'react';

export default function EffectExample() {

    // useEffect is a hook designed to synchronize a
    // component w/ some external system/thing. This
    // thing will usually be an API, but it could 
    // also be used for moidying/manipulating things
    // like the title of your HTML document

    // Has 2 arguments
    // 1. A callback fxn to run upon changes of the
    // aforementioned system/thing it is trying to sync to
    // 2. A dependency array - series of state variables
    // that the useEffect is paying attention to.
    // Whenever one of these 'dependency' variables 
    // changes, React will rerun the callback fxn (1.)
    // If there is no dependency array, it will make
    // the fxn run on every single render...

    const [count, setCount] = useState(0)

    const [data, setData] = useState();

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setData(json)
        })
    }, [])

    useEffect(() => {
        console.log("Welcome from the first render")
    }, [count])



    return(
        <>
            <h1>useEffect Example</h1>
            <button onClick={() => setCount(count+1)}>Add to Test</button>
            <h1>Example of useEffect with an API:</h1>
            {data && (
            <ul>
                <li>{data.userId}</li>
                <li>{data.title}</li>
            </ul>
            )}
        </>
    )
}

