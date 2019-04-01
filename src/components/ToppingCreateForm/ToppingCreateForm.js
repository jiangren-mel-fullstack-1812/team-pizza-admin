import React from 'react';
import './ToppingCreateForm.css';

const ToppingCreateForm = () => (
  <div className="newToppingFormContainer">
      <h2 className='contentHeader'>Add New Topping</h2>
      <div className="formItems">
        <input type="text" placeholder="Image URL" value />
        <input type="text" placeholder="Name" value />
        <input type="text" placeholder="Price" value />
      </div>
      <br />
      <button>Add</button>
  </div>
);

export default ToppingCreateForm;