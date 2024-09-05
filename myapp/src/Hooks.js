import React, { useState } from 'react'

const Hooks = () => {

    const [state, setState] = useState(0)

    const increase = () => {
        setState(() => state + 2)
    }
    // create a counter using useState -- increase , decrease(native value nhi mile ) , reset

    return (
        <div>
            <h1 className='text-3xl '> Hooks</h1>
            useState hooks
            <h5>{state}</h5>
            <button onClick={increase}>increase</button>

        </div>
    )
}

export default Hooks