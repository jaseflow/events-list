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
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchedEvent, setSearchedEvent] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('anywhere');

  function handleEventSearch(e) {
    setSearchedEvent(e.target.value)
  }

  function handleSetLocation(e) {
    setSelectedLocation(e.target.value)
  }

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

  // watch for location changes
  useEffect(() => {
    setFilteredEvents(filteredEvents => events.filter(item => {
      if (searchedEvent) {
        const titleMatch = item.Title.toLowerCase().includes(searchedEvent.toLowerCase())
        if (!titleMatch) {
          return false
        }
      }
      const cityMatch = selectedLocation.includes(item.Location.City)
      return cityMatch || selectedLocation === 'anywhere'
    }))
  }, [selectedLocation, searchedEvent, events]);

  return (
    <div className="App">
      <Router>
        <Header onEventSearch={handleEventSearch} onSetLocation={handleSetLocation}/>
        <Route exact path="/">
          <EventsList events={filteredEvents} />
        </Route>
        <Route path="/event">
          <EventDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
