import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Single state for counter

    return (
        <div>
            <h1 data-testid="counter-value">Counter: {count}</h1> {/* Explicit text for testing */}
            <button 
                data-testid="increment-button" 
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button 
                data-testid="decrement-button" 
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
