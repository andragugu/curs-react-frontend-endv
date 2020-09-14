import React, {useState, useEffect, useRef} from 'react';
import Card from '../card/card';
import './search.css';


const Search = React.memo(props => {
const {onSearchBootcampsLoaded} = props;
const [searchField, setSearchField] = useState('');
const inputRef = useRef();

useEffect(() => {
    console.log('search effect');
    const timer = setTimeout(() => {
        if(searchField === inputRef.current.value) {
            const query = searchField.length === 0 ? '' : `?orderBy="name"&equalTo="${searchField}"`;
            fetch('https://bootcamp-a8786.firebaseio.com/bootcamps.json' + query).then(
                reponse => reponse.json()
            ).then(
                data => {
                    const bootcamps = [];
                for(const key in data) {
                     bootcamps.push({
                                    id: key,
                                    name: data[key].name,
                                    description: data[key].description,
                                    website: data[key].website,
                                    phone: data[key].phone,
                                    email: data[key].email});
                }
               onSearchBootcampsLoaded(bootcamps); 
            })
        }
    },500);
    
    // console.log(searchField, 'state');
    // const query = searchField.length === 0 ? '' : `?orderBy="name"&equalTo="${searchField}"`;
    // fetch('https://bootcamp-a8786.firebaseio.com/bootcamps.json' + query).then(
    //     reponse => reponse.json()
    // ).then(data => {
    //     console.log(data, 'searchBootcamps');
    //     const bootcamps = [];
    //      for(const key in data) {
    //          bootcamps.push({
    //              id: key,
    //              name: data[key].name,
    //              description: data[key].description,
    //              website: data[key].website,
    //              phone: data[key].phone,
    //              email: data[key].email

    //          });
    //      }
    //      onSearchBootcampsLoaded(bootcamps);

    // })
    return () => {
        clearTimeout(timer);
    }
}, [searchField])

    return (
        <section className="search">
        <Card>
            <div className="search-input">
                <label>
                    Filter by name
                </label>
                <input ref={inputRef} onChange={e => setSearchField(e.target.value)} type="text" />
            </div>
        </Card>
        </section>
    )
});


export default Search;