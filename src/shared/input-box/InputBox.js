import React, { useState, Component } from 'react';

const Input = function (props) {
    console.log("Props in Input :", props)

    const [value, setValue] = useState('');

    const handleChange = event => {
        // console.log(event.target.value);
        setValue(event.target.value);

        props.onchange(value);
    }

    return (
        <div>
            <input placeholder={props.data.name} 
                id={props.data.name}
                onChange= {handleChange}
            />
        </div>
    );
}
export default Input;