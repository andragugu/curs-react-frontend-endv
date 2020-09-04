import React, {Component} from 'react';
import Child from './child';
import Sibling from './sibling';

class Parent extends Component {
    constructor() {
        super();

        this.state = {name: "Andra"};

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }


    render() {
        return (
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        )
    }
}

export default Parent;