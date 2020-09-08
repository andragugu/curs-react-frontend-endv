import React, { Component } from 'react'
import BootcampComponent from '../bootcamp/bootcamp';
import SearchBarCompoent from '../searchBar/searchBar';
import './bootcampsList.css';
import axios from 'axios';
import Spinner from '../spinnerComponent/spinner';

class BootcampListComponent extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            isLoading: false,
            bootcamps: [
                {
                name: '',
                id: '1'
            }
            ]
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get('http://www.endava-bootcamp.com/api/v1/bootcamps/', {headers: {
            "Access-Control-Allow-Origin": "*"
        }}).then(
            response =>  {
                console.log(response, 'raspuns')
                this.setState({bootcamps: response.data.data, isLoading: false})});
        
    }
    
    render() {
        const {bootcamps, searchField, isLoading} = this.state;
        console.log(bootcamps, 'bootcamps');
        const filteredBootcamps = bootcamps.filter(bootcamp => bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
        return isLoading ? <Spinner /> : (
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
