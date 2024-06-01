import React, { useEffect, useState } from 'react';

function Api() {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
       setCatFact(data.fact);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <h2>Random Cat Fact:</h2>
      <p>{catFact}</p>
    </div>
  );
}

export default Api;

