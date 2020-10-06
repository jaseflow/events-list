import React from 'react';

import './EventDetails.scss'
import EventHero from './EventHero';
import Breadcrumbs from '../shared/Breadcrumbs';
import Pill from '../shared/Pill';

function EventDetails(props) {

  return (
    <div className="EventDetails container">
      <Breadcrumbs />
      <EventHero
        title="Infection Prevention and Control (Australia)"
        subtitle="Brisbane, Queensland"
        image="/conference.jpg"
      />
      <h2>Available seats</h2>
      <p>Saturday, March 22 | 2:30pm</p>
      <div className="EventDetails__seats flex">
        <div className="margin-l-one">
          <Pill text="W25" />
        </div>
        <div className="margin-l-one">
          <Pill text="W26" />
        </div>
      </div>
    </div>
  )
}

export default EventDetails;
