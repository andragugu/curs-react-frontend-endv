import React, { Component } from 'react'
import BootcampComponent from '../bootcamp/bootcamp';
import SearchBarCompoent from '../searchBar/searchBar';
import './bootcampsList.css';

class BootcampListComponent extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            bootcamps: [
            {   id: 1,
                name: "Frontend Bootcamp",
                description: "Frontend Bootcamp"
            },
            {
                id: 2,
                name: "Backend Bootcamp",
                description: "Backend Bootcamp"
            },
            {
                id: 3,
                name: "ML Bootcamp",
                description: "ML Bootcamp"
            }
            ]
        }
    }
    
    render() {
        const {bootcamps, searchField} = this.state;
        const filteredBootcamps = bootcamps.filter(bootcamp => bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
        return (
            <div className="container">
                <SearchBarCompoent placeholder="Search bootcamps" handleChange={e => this.setState({searchField: e.target.value})}></SearchBarCompoent>
                <div className="card-list">
                {filteredBootcamps.map(bootcamp => <BootcampComponent key={bootcamp.id} bootcamp={bootcamp}></BootcampComponent>)}
            </div>
            </div>
        
        )
    }
}

export default BootcampListComponent;
