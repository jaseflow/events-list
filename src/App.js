import React, { useState, useEffect } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import EventsList from './components/Events/EventsList';
import EventDetails from './components/Events/EventDetails';

function App() {
  const [events, setEvents] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(d => data);
    } catch (error) {
      console.log(error)
    }
  }

  // fetch
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <EventsList events={events} />
        </Route>
        <Route path="/event">
          <EventDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
