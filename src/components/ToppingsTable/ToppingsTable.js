import React from 'react';
import './ToppingsTable.css';

const ToppingsTable = () => (
  <div className="toppingsTableContainer">
    <h2 className='contentHeader'>Toppings</h2>
    <table className="toppingsTable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="https://img.icons8.com/cotton/64/000000/onion.png" /></td>
          <td>Onion</td>
          <td>0.99</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ToppingsTable;
