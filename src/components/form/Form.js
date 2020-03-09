import React, { useState, Component } from 'react';
import Input from '../../shared/input-box/InputBox'

const Form = function (props) {

    const [value, setValue] = useState('');

    const onchange = (data) => {
        setValue(data)
        console.log("Form>", data);
    }

    return (
        <div>
            <Input data={value} onchange={(e) => { onchange(e) }}/>
        </div>
    );
}
export default Form;