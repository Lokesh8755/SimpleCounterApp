import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span data-testid="counter-value">Counter: {count}</span> {/* Ensures text is in a `span` */}
            <button 
                data-testid="increment-button" 
                onClick={() => setCount(prevCount => prevCount + 1)} // Use `prevCount` for robustness
            >
                Increment
            </button>
            <button 
                data-testid="decrement-button" 
                onClick={() => setCount(prevCount => prevCount - 1)} // Use `prevCount` for robustness
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
