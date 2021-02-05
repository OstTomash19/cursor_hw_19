import React from 'react';
import {
        BrowserRouter as Router,
        Route,
        Redirect,
        Switch
        } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/sign_up' component={SignUp}/>
      <Route path='/sign_in' component={SignIn}/>
      <Route path='/' exact render={() => <Redirect to='/sign_in'/>}/> 
      </Switch>
    </Router>
  );
}

export default App;