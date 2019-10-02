import React, { Component, PureComponent } from 'react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 4
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ a: 4 })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Поменять значение a на 4</button>
                <Child a={this.state.a}/>
            </div>
        );
    }
}

// если заменить pureComponent на обычный component, то чайлд будет делать повторный рендер
class Child extends React.PureComponent {
    render () {
        console.log('render');
        const { a } = this.props;

        return (
            <h4>{`value of a === 4: ${a === 4}`}</h4>
        )
    }
}

export { App }