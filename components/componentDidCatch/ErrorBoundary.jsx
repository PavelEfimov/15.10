import React, { Component } from 'react';

import { logErrorToFile } from '../../utils';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, info) {
        this.setState({ error: error, errorInfo: info });
    }

    render() {
        const { children } = this.props;

        const { error, errorInfo } = this.state;

        return error ? (
                <div>
                    <h1>Something went wrong</h1>
                    <p style={{ color: 'red' }}>{`${error.toString()}`}</p>
                    <p>{`Stack: ${errorInfo.componentStack}`}</p>
                </div>
            )
            : children;
    }
}

export default ErrorBoundary;
