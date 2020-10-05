import React from 'react';
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';

import Header from './components/Header/Header';
import EventsList from './components/Events/EventsList';
import EventDetails from './components/Events/EventDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <EventsList />
        </Route>
        <Route path="/details">
          <EventDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
