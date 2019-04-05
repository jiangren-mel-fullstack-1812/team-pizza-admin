import React from 'react';
import './ContentBoard.css';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ToppingPage from '../ToppingPage';
import SizePage from '../SizePage';

const ContentBoard = (props) => (
  <div className='content'>
    <Route exact path='/' component={ToppingPage} />
    <Route exact path='/topping' component={ToppingPage} />
    <Route exact path='/size' component={SizePage} />
  </div>
);

export default ContentBoard;