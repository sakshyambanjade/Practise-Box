import React from 'react';
import './Style.css';

const Person = ({ img, name, job }) => {
  return (
    <div>
      <div className='Person'>
        <img src={img} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

const PeopleList = ({ people }) => {
  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} img={person.img} name={person.name} job={person.job} />
      ))}
    </div>
  );
};

export default PeopleList;
