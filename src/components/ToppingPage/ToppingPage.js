import React from 'react';
import ToppingsTable from '../ToppingsTable';
import ToppingCreateForm from '../ToppingCreateForm'

const ToppingPage = () => (
  <div className='toppingPage'>
    <ToppingsTable />
    <ToppingCreateForm />
  </div>
);

export default ToppingPage;