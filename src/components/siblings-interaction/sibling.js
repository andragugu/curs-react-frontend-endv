import React, {Component} from 'react';


 class Sibling extends Component {
    render() {
        const {name} = this.props;
            return (
                
                <div>
                    <h1>My name is {name}</h1>
                </div>
            );
    }
}

export default Sibling;