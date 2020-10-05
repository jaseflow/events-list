import React from 'react';

import EventsCard from './EventsCard'

function Events(props) {
  return (
    <div className="container">
      <h1 className="title">Upcoming events</h1>
      <EventsCard />
      <EventsCard />
      <EventsCard />
    </div>
  )
}

export default Events;
