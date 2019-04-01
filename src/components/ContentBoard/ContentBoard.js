import React from 'react';
import './ContentBoard.css';
import ToppingsTable from '../ToppingsTable';
import ToppingCreateForm from '../ToppingCreateForm'

const ContentBoard = (props) => (
  <div className='content'>
    <ToppingsTable />
    <ToppingCreateForm />
  </div>
);

export default ContentBoard;