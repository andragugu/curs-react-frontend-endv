import React from 'react'
import './bootcamp.css';
import {Link} from 'react-router-dom';

const BootcampComponent = props => {

    const {bootcamp: {name, description, id}} = props;
    
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{description}</p>
            <Link to={`/bootcamps/${id}`}>See details</Link>
        </div>
    )
}

export default BootcampComponent;
