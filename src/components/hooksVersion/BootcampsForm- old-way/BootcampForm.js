import React, {useState, useEffect} from 'react';
import Card from '../card/card';


const BootcampForm = React.memo(props => {
    const [formState, setFormState] = useState({name: '', description: ''})

    useEffect(() => {
        console.log(formState, 'state');
    });



    return (
    <section className="bootcamp-form">
        <Card>
       <form>
        <div className="form-control">
            <label htmlFor="name">Name</label>
            <input onChange={event => {
                const newVal = event.target.value;
                setFormState((previousState) => ({
                    name: newVal,
                    description: previousState.description
                }))
            }} type="text" id="name" />
        </div>
        <div className="form-control">
            <label htmlFor="description">Description</label>
            <input onChange={event => {
                const newVal = event.target.value;
                setFormState((previousState) => ({
                    name: previousState.name,
                    description: newVal
                }))
            }} type="text" id="description" />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
        </div>
        <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
        </div>
        <div className="form-control">
            <label htmlFor="webite">Website</label>
            <input type="text" id="website" />
        </div>

        <div className="bootcamps-form__actions">
            <button type="submit">Add bootcamp</button>
        </div>
       </form>
        </Card>
    </section>
)
});


export default BootcampForm;