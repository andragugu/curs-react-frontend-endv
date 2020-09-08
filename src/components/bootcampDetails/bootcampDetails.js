import React, {Component} from 'react';
import axios from 'axios';

class BootcampDetailsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bootcamp: {}
        }

    }
   async componentDidMount() {
    const reponse = await axios.get(`http://www.endava-bootcamp.com/api/v1/bootcamps/${this.props.match.params.id}`, {headers: {
        "Access-Control-Allow-Origin": "*"
    }});
        this.setState({bootcamp: reponse.data.data});
    console.log(reponse.data.data, 'raspuns');
    }

    render() {
        const {match: {params: {id}}} = this.props;
        const {id : bootcampId, name, description, website, phone, email, careers} = this.state.bootcamp;
        return (
        <div>
            <p>Bootcamp with id: {id}</p>
        <p>Name: {name}</p>
        <p>BootcampId: {bootcampId}</p>
        <p>Description: {description}</p>
        <p>Website: {website}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Careers: {careers}</p>
        </div>)
    }
}

export default BootcampDetailsComponent;