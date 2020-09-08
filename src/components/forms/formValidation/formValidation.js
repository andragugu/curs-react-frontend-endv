import React, {useState, useEffect} from 'react';
import FormComponent from '../formComponent/formComponent';

const FormValidatorComponent = ({initialValues, validate}) => {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        console.log(values, errors, touched, 'state values');
    });

    const handleChange = event => {
        console.log(event, 'change event');
        const {name, value: newValue, type} = event.target;
        console.log(name, newValue, type, 'event values');

        const value = type === "number" ? +newValue :  newValue;

        setValues({
            ...values,
            [name] : value
        });

        setTouched({
        ...touched,
        [name] : true
        });
    }

    const handleBlur = event => {
        console.log(event, 'blur');
        const {name, value} = event.target;

        const error = validate[name](value);

        setErrors({
            ...errors,
            ...(error &&  {[name]: touched[name] && error})
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event, 'submit');
    }


   
    return (
    <>
    <FormComponent 
    errors={errors}
    touched = {touched}
    values = {values}
    handleBlur={handleBlur}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
    </>
    )
}

export default FormValidatorComponent;