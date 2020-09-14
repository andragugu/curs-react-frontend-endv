import React, {useState, useEffect, useCallback} from 'react';
import Search from '../search/search';
import BootcampForm from '../BootcampForm--new/BootcampForm';
import BootcampsList from '../bootcampList/bootcampList';

const BootcampsRouteComponent = () => {
    const [bootcamps, setBootcamps] = useState([]);

    useEffect(() => {
        fetch('https://bootcamp-a8786.firebaseio.com/bootcamps.json').then(
            reponse => reponse.json()
        ).then(data => {
            const bootcamps = [];
                    for(const key in data) {
                        bootcamps.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        website: data[key].website,
                        phone: data[key].phone,
                        email: data[key].email})      
                        }
                        console.log(bootcamps, 'bootcamps- backend');
                        setBootcamps(bootcamps);
        })
    },[])

    useEffect(() => {
        console.log(bootcamps, 'bootcamps');
    });

    const onSearchHandler = useCallback((filteredBootcamps) => {
            setBootcamps(filteredBootcamps);
    }, []);

    const addBootcamp = (bootcamp) => {
        fetch('https://bootcamp-a8786.firebaseio.com/bootcamps.json', {method: 'POST', body: JSON.stringify(bootcamp), headers: {
            'Content-Type': 'application/json'
        }}).then(response => response.json())
        .then(data => {
            setBootcamps(bootcamps => [
                ...bootcamps,
                {...bootcamp, id: data.name}
            ]);
        })
    }

return (
    <div className="bootcamps-parent">
        <BootcampForm onAddBootcamp={addBootcamp} />

        <section>
        <Search onSearchBootcampsLoaded={onSearchHandler} />
        <BootcampsList bootcamps={bootcamps} />
        </section>
    </div>
)
}


export default BootcampsRouteComponent;