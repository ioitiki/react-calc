import React from 'react';
import Calculator from './Calculator';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Calculator} />
      </Switch>
    </div>
  );

}

export default App;
