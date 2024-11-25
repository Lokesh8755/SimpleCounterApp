import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span data-testid="counter-value">Count: {count}</span>
            <br/>
            <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button  type="button" onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
