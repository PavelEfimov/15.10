import React, {Component} from 'react';

import List from './List';

import {getList} from '../../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 6
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const { target } = e;

        this.setState({ count: target.value })
    }

    componentDidMount() {
        getList({count: this.state.count})
            .then(({data}) => this.setState({list: data}));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            getList({count: this.state.count})
                .then(({data}) => this.setState({list: data}));
        }
    }

    render() {
        const { onInputChange } = this;
        const {list} = this.state;

        return (
            <div>
                <input type="number" onChange={onInputChange} />
                <List list={list}/>
            </div>
        );
    }
}

export { App };
