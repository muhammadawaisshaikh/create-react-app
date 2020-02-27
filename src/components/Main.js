import React, { Component } from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Main Component'
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}