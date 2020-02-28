import React, { useState, Component } from 'react';
import Input from '../../shared/input-box/InputBox'

const Form = function (props) {
    console.log("Props in Form :", props);

    const [value, setValue] = useState('');

    const data = {
        name: 'name',
        value: ''
    }

    const onchange = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Input data={data} onchange={(e) => { onchange(e) }}/>
        </div>
    );
}
export default Form;