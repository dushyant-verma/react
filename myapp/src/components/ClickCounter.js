// 2. Create an Counter using usestate where when we 
// click the value must be change 

import { useState } from "react"; // import hook

export const ClickCounter = () => {
    const [count, setCount] = useState(0);  //  set use state at 0 -  hook - used one state
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (

        <>
            <div>This is our counter Application</div>
            <div className="flex justify-center">

                <button onClick={decrement}>-</button>
                <span>Clicks{count}</span>
                <button onClick={increment}>+</button>

            </div>

        </>

    )
}