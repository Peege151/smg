import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Components
import Browse from './Components/Browse/Browse.js';


const Routes = () => (
  <Switch>
    <Route path="/browse" component={Browse}/>
  </Switch>
);

export default Routes;
