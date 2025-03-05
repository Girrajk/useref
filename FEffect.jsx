import React, { useEffect, useState } from 'react'

function FEffect() {
    const [count, setCount] = useState(0);
    const [evenNum, setEvenNum] = useState(2);

    useEffect(() => {
        console.log(`Count: ${count}`);

    }, [count]);

    useEffect(() => {
        console.log(`number: ${evenNum}`);

    }, [evenNum]);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <h1>Number: {evenNum}</h1>
            <button onClick={() => setEvenNum(evenNum + 2)}>Click</button>
        </div>
    )
}

export default FEffect