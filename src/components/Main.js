import React, { Component } from 'react';

import Form from './form/Form'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React Test App'
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                
                <Form />
            </div>
        );
    }
}