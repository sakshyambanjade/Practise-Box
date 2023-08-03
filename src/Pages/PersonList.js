import React from 'react';
import './Style.css';
import PeopleList from '../Pages/PersonList';

const people = [
  {
    img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    name: 'John',
    job: 'developer',
  },
  {
    img: 'https://randomuser.me/api/portraits/thumb/women/75.jpg',
    name: 'Jane',
    job: 'designer',
  },
  {
    img: 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
    name: 'Mike',
    job: 'manager',
  },
];

const Home = () => {
  return (
    <div>
      <PeopleList people={people} />
    </div>
  );
};

export default Home;
