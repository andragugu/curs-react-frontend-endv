import React, {useState} from 'react';
import SearchBarCompoent from '../../searchBar/searchBar';
import BootcampComponent from '../../bootcamp/bootcamp';
import './bootcampsListHooks.css';

const BootcampListComponentHooks = () => {
const [componentState, setComponentState] = useState({
    searchFiled: '',
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
    ],

});

const updateSearchFiled = e => {
    setComponentState({...componentState, searchFiled: e.target.value})
}

const {bootcamps, searchFiled} = componentState;
const filteredBootcamps = bootcamps.filter(bootcamp => bootcamp.name.toLocaleLowerCase().includes(searchFiled.toLocaleLowerCase()));
return (
    <div className="container">
        <SearchBarCompoent placeholder="Search bootcamps..." handleChange={updateSearchFiled}></SearchBarCompoent>
        <div className="card-list">
            {filteredBootcamps.map(bootcamp => <BootcampComponent key={bootcamp.id} bootcamp={bootcamp}></BootcampComponent>)}
        </div>
    </div>
)
}

export default BootcampListComponentHooks;