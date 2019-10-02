import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            obj: { a: 4 }
        };

        this.onChange= this.onChange.bind(this);
    }

    onChange() {
        const newObj = { a: 4 };

        this.setState({ obj: newObj })
    }

    render() {
        return (
            <div>
                <button onClick={this.onChange}>Поменять значение obj.a на 4</button>
                <Child obj={this.state.obj}/>
            </div>
        );
    }
}

class Child extends Component {
    //если убрать этот метод,
    // то child будет рендериться каждый раз, несмотря на то, что пропсы одинаковые
    // Здесь не сработает pureComponent, так как в объекты это ссылочный тип, они никогда не будудт равны

    shouldComponentUpdate(nextProps) {
        // console.log('this.props: ', this.props);
        // console.log('next.props: ', nextProps);

        if(nextProps.obj.a === this.props.obj.a) {
            return false;
        }

        return true;
    }

    render () {
        console.log('render');
        const { obj } = this.props;

        return (
            <h4>{`value of obj.a === 4: ${obj.a === 4}`}</h4>
        )
    }
}

export { App }