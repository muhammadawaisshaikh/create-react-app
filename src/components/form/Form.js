import React, { useState, Component } from 'react';
import Input from '../../shared/input-box/InputBox'

const Form = function (props) {

    const {toggle, toggler} = props;

    const [value, setValue] = useState('');

    const onchange = (data) => {
        setValue(data)
        console.log("Form>", data);
    }

    const togller = () => {
        toggler();
    }

    console.log(toggle);

    return (
        <div>
            {/* input component  */}
            <Input data={value} onchange={(e) => { onchange(e) }}/>

            <a onClick={togller} style={{padding: 20, margin: 10, backgroundColor: 'green', color: '#ffffff'}}>Toggle State</a>
        </div>
    );
}
export default Form;