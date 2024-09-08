import React, { useState } from "react";

const GetInputValues = () => {


    const [value, setValue] = useState('')
    // Setting one state - InputValue and SetValue

    const InputHandling = (e) => {
        setValue(e.target.value)
    }

    // console.log(value)

    return (
        //  getting value through h4 
        <>
            <h4>{value}</h4>
            <input onChange={InputHandling} placeholder="Enter values here" />

        </>
    )

}

export default GetInputValues