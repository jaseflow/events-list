import React from 'react';

import { Link } from 'react-router-dom';

import './EventsHero.scss'
import Figure from '../shared/Figure';

function EventsHero(props) {
  return (
    <div className="EventsHero">
      <Figure ratio="21-9" />
    </div>
  )
}

export default EventsHero;
