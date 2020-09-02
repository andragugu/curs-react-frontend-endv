import React from 'react'
import './bootcamp.css';

const BootcampComponent = props => {
    const {bootcamp: {name, description}} = props;
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}

export default BootcampComponent;
