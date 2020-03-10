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
            <div style={{padding: 20}}>
                <h2>{this.state.name}</h2>

                <hr />

                <p>below form covers two things: <br />1. Sharing data as props and change the state using event emit and callbacks. <br />2. Passing props from child to parent react</p>
                <Form toggle={this.state.toggle} toggler={this.handleToggler} />

                <hr />
                
            </div>
        );
    }
}