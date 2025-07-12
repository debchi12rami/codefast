// useState Hook is a special function that lets you use state and other React features without writing a class. and able to update the full page.
// use client to avoid errors
'use client';
import { use, useState } from 'react';

export const Example = () =>{
    
    // Hooks should be called at the top level of the component
    const [count, setCount] = useState(0);
    const incrementcounter = () => {
        setCount(count + 1);
    };

    const decrementcounter = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Counter Example</h1>
            <div className="text-3xl mb-4">{count}</div>
            <div className="space-x-4">
                <button onClick={incrementcounter} className="btn btn-primary">Increment</button>
                <button onClick={decrementcounter} className="btn btn-secondary">Decrement</button>
            </div>
        </div>
    );

}
export default Example;


