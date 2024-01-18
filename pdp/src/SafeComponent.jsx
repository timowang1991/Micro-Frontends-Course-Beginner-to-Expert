import React from "react";

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch() {
        // you can log something to splunk here
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children;
    }
}