// Install Axios using: npm install axios

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [dittoAbilities, setDittoAbilities] = useState([]);

  useEffect(() => {
    const fetchDittoInfo = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        const abilities = response.data.abilities;

        // Update state with Ditto's abilities
        setDittoAbilities(abilities);
      } catch (error) {
        console.error('Error fetching Ditto information:', error);
      }
    };

    // Call the fetchDittoInfo function when the component mounts
    fetchDittoInfo();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <p>Implement the pokemon API https://pokeapi.co/api/v2/pokemon/ditto using axios library and display the name and url properties on browser from ability object array(16 Feb).</p>
      <ul>
        {dittoAbilities.map((ability, index) => (
          <li key={index}>
            Name: {ability.ability.name}, URL: {ability.ability.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;