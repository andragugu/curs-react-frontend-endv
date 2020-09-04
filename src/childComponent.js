import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor() {
        super();
        console.log('constructor - copil');
    }

    componentDidMount() {
        console.log('componentDidMount! - copil');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate! - copil');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount! - copil');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate! - copil', nextProps);
        // return true;
        // return false;
        return nextProps.text !== this.props.text;
    }



    render() {
        console.log('render copil');
        const {text} = this.props;
        return (
            <div>
                <p>Child component</p>
                <p>{text}</p>
            </div>
        )
    }
}

export default ChildComponent;