import React from 'react';

const FormComponent = ({errors, touched, values, handleChange, handleBlur}) => {
    return (
        <div>
            <form autoComplete="off">
                <div>
                    <label htmlFor="firstName">
                        First name * :

                        <input 
                        type="text"
                        id="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="control"
                        placeholder="Enter first name"
                        value={values.firstName}
                        name="firstName"
                        required
                        />
                    </label>
                    {touched.firstName && errors.firstName}
                </div>

                <div>
                    <label htmlFor="lastName">
                        Last name * : 
                    <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="lastName"
                    className="control"
                    placeholder="Enter last name"
                    value={values.lastName}
                    name="lastName"
                    required
                    />
                    </label>
                    {touched.lastName && errors.lastName}
                </div>
                <div>
                    <label htmlFor="email">
                        Email address * :
                        <input 
                        type="text"
                        className="control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        value={values.email}
                        placeholder="Please enter email"
                        name="email"
                        required
                        />
                    </label>
                    {touched.email && errors.email}
                </div>
                <div>
                <label htmlFor="age">
                Age * :
                <input 
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                className="control"
                id="age"
                placeholder="Enter age"
                value={values.age}
                name="age"
                min="0"
                required
                />
               </label>

               {touched.age && errors.age}
                </div>

                <div>
                    <button typr="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;