import React from 'react';

import EventsCard from './EventsCard'

function Events(props) {
  const events = props.events;
  const eventsList = events.length && events.map((item, i) =>
    <EventsCard
      id={i + 1}
      key={i}
      title={item.Title}
      time={item.Time}
      location={item.Location}
      availability={item.AvailableSeats}
    />
  );

  return (
    <div className="container">
      <h1 className="title">Upcoming events</h1>
      {eventsList}
    </div>
  )
}

export default Events;
