import React, {Component, Fragment} from 'react';
import './App.css';
// import BootcampListComponent from './components/bootcampsList/bootcampsList';
// import Parent from './components/siblings-interaction/parent';
import ChildComponent from "./childComponent";

    class  App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello',
            showChild: true
        };
    }
    render() {
        console.log('render Parent');
        return (
            <Fragment>
                <button onClick={() => this.setState(state => ({showChild : !state.showChild}))}>
                    Toggle state
                </button>

                <button onClick={() => this.setState(state => ({text: state.text + '+hello'}))}>
                    Update state
                </button>
                {this.state.showChild ? <ChildComponent text={this.state.text} /> : null}
            </Fragment>
        )
    }
}

export default App;
