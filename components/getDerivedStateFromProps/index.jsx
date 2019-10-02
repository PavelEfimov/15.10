import React, {Component} from 'react'

import InputMessage from './InputMessage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

         this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const {value} = event.target;

        this.setState({input: value})
    }

    render() {
        const { onChange } = this;
        const { input } = this.state;

        return (
            <label>
                меняйте значение:
                <input type="text" onChange={onChange}/>
                <InputMessage message={input} />
            </label>
        );

    }
}

export { App };