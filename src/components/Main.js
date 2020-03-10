import React, { Component } from 'react';

import Form from './form/Form'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React Test App',
            toggle: true
        };
    }

    handleToggler = () => {
        if(this.state.toggle) this.setState({toggle: false})
        if(!this.state.toggle) this.setState({toggle: true})

        console.log(this.state.toggle);
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                
                <Form toggle={this.state.toggle} toggler={this.handleToggler} />
            </div>
        );
    }
}