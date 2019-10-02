import React, {Component} from "react";
import Timer from './Timer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {timerOn: true};

        this.stopTimer = this.stopTimer.bind(this);
    }

    stopTimer() {
        this.setState({timerOn: false});
    }

    render() {
        return this.state.timerOn ? (
            <div>
                <button onClick={this.stopTimer}>Stop timer</button>
                <Timer/>
            </div>
        ) : null;

    }
}

export {App};
