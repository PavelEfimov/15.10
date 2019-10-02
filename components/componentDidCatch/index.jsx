import React, { Component } from 'react'

import ErrorBoundary from './ErrorBoundary';
import Child from './Child';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <h4>App component</h4>
                <Child />
            </ErrorBoundary>
        )
    }
}

export { App };
