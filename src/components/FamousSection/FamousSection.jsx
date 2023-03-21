import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';
import FamousPersonForm from './FamousPersonForm';
import FamousPersonList from './FamousPersonList';

function FamousSection() {
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios.get('/people')
      .then(response => {
        console.log(response.data);
        setPeopleArray(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

    return (
      <section className="new-person-section">
        <FamousPersonForm fetchPeople={fetchPeople} />
        <FamousPersonList people={famousPeopleArray} />
      </section>
    );
}

export default FamousSection;
