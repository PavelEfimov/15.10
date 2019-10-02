import React, {Component} from 'react'

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasBug: false
        };

        this.makeError = this.makeError.bind(this);
    }

    makeError() {
        this.setState({ hasBug: true })
    }

    render () {
        const { hasBug } = this.state;

        if(hasBug) {
            throw new Error('Fatal error')
        }

        return <button onClick={this.makeError}>Click on me</button>
    }
}

export default Child;