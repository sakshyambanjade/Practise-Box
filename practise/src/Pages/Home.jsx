import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../Css/PracticeTracker.css'; // Import the CSS file
import Navbar from '../Pages/Navbar';

function PracticeTracker() {
  return (
    <>
    <Navbar/>
    <div className="practice-tracker">
      <h1>Practice Tracker</h1>
      <table className="practice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Practice</th>
            <th>Go-to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Props</td>
            <Link to="/props" className="practice-button">Go to props</Link>
          </tr>
          <br></br>
          <tr>
            <td>2</td>
            <td>UseState</td>
            <Link to="/UseState" className="practice-button">Go to UseState</Link>
          </tr>
          <br></br>
          <tr>
            <td>2</td>
            <td>UseState</td>
            <Link to="/apicalling" className="practice-button">Go to Api-Calling</Link>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table> 
    </div>
    </>
  );
}

export default PracticeTracker;
