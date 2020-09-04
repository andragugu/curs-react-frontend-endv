import React, {Component} from 'react';

export class Child extends Component {
    constructor(props) {
            super(props);

            this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value="Andra">Andra</option>
                    <option value="Liviu">Liviu</option>
                    <option value="Alin">Alin</option>
                    <option value="Ana">Ana</option>
                </select>
            </div>
        )
    }
}


export default Child;