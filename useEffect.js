// UseEffect use for side effects in functional components
import React, { useState, useEffect } from 'react';
function ExampleComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}