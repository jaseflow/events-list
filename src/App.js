import React from 'react';
import './App.scss';

import EventsCard from './components/Events/EventsCard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Upcoming events</h1>
        <EventsCard />
      </div>
    </div>
  );
}

export default App;
