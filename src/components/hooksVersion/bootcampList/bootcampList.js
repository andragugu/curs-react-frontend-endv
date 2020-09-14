import React from 'react';
import './bootcampList.css';


const BootcampsList = (props) => {

    return (
        <section className="bootcamps-list">
                <h1>Bootcamps Loaded</h1>
                <ul>
                    {props.bootcamps.map(bootcamp => (
                        <li key={bootcamp.id} >
                        <span>{bootcamp.name}</span>
                        <span>{bootcamp.description}</span>
                        </li>
                    ))}
                </ul>
        </section>
    );
}


export default BootcampsList;