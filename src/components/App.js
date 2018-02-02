import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Grid  from 'react-bootstrap/lib/Grid';

import ExpensesBox from './ExpensesBox';
import Add from './Add';
import Edit from './Edit';
import './App.css';

const App = () => (
  <Grid>
    <Switch>
      <Route exact path='/' component={ExpensesBox} />
      <Route path='/add' component={Add} />
      <Route path='/edit/:id' component={Edit} />
    </Switch>
  </Grid>
);

export default App


