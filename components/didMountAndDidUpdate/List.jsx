// import React from 'react';
//
// const List = ({ list }) => (
//     <ul>
//         {list.map((item, index) => <li key={index}>{item.todo}</li>)}
//     </ul>
// );
//
// export default List;

import React, { Component } from 'react';

class List extends Component {
    render() {
        const { list } = this.props;

        return (
            <ul>
                {list.map((item, index) => <li key={index}>{item.todo}</li>)}
            </ul>
        );
    }
}

export default List;
