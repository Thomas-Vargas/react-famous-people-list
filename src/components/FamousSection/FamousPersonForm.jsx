import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FamousPersonForm = (props) => {
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

    const addPerson = (evt) => {
        evt.preventDefault();
        console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
        
        // TODO: create POST request to add this new person to the database
    
        // HINT: the server is expecting a person object 
        //       with a `name` and a `role` property
    
        axios.post('/people', {name: famousPersonName, role: famousPersonRole})
          .then(response => {
            console.log(response);
            props.fetchPeople();
          })
          .catch(error => {
            console.log(error);
          })
    
        setPersonName('');
        setPersonRole('');
      }
    
    return (
        <form onSubmit={addPerson}>
            <label htmlFor="name-input">Name:</label>
            <input
                id="name-input"
                value={famousPersonName}
                onChange={(e) => setPersonName(e.target.value)}
            />
            <label htmlFor="role-input">Famous for:</label>
            <input
                id="role-input"
                value={famousPersonRole}
                onChange={(e) => setPersonRole(e.target.value)}
            />
            <button type="submit">Done</button>
        </form>
    )
}

export default FamousPersonForm;