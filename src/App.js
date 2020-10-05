import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import EventsCard from './components/Events/EventsCard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1 className="title">Upcoming events</h1>
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
}

export default App;
