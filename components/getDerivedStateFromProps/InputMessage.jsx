import React, { Component } from 'react'

class InputMessage extends Component {
    constructor(props) {
        super(props);

        this.state = { message: 'default text' }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('props: ', props);
        console.log('state: ', state);

        if (props.message !== state.message && props.message.length !== 0) {
            return { message: props.message };
        }

        return null;
    }

    render() {
       const { message } = this.state;

        return (
            <h3>{message}</h3>
        );
    }
}

export default InputMessage;