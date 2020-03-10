import React from 'react';

const Input = function (props) {
    console.log("Props in Input :", props);

    const handleChange = event => {
        props.onchange(event.target.value);
    }

    return (
        <input 
            placeholder="name"
            id="name"
            style={{padding: 15, fontSize: 18}}
            onChange= {handleChange}
        />
    );
}
export default Input;