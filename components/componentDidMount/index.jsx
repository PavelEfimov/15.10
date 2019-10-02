import React, {Component} from 'react';
import {getList} from '../../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5,
            list: []
        }
    }


    componentDidMount() {
        const {count} = this.state;

        getList({count: count})
            .then(({data}) => this.setState({list: data}));
    }

    render() {
        const {list} = this.state;

        return (
            <ul>
                {list.map((item, index) => <li key={index}>{item.todo}</li>)}
            </ul>
        );
    };
}

export { App };