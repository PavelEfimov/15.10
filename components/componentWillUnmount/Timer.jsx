import React, {Component} from 'react';
import {render, unmountComponentAtNode} from 'react-dom'

class Timer extends Component {
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('hello world');
        }, 100)
    }

    // без очистки интервала, при нажатии на кнопку наш таймер не рендерился в дома,
    // но при этом интервал все равно продолжит свою работу
    // TODO законсольте метод componentWillUnmount
    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        return (
            <p>Timer is running</p>
        );
    }
}

export default Timer;