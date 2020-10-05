import React from 'react';

import { Link } from 'react-router-dom';

import './EventsCard.scss'
import Figure from '../shared/Figure';

function EventsCard(props) {
  return (
    <Link to="/details" className="EventsCard">
      <Figure image="/conference.jpg" ratio="1-1" />
      <div>
        <p className="EventsCard__date small margin-b-one">Sat, Mar 22, 2:30PM</p>
        <h3 className="flat">Infection Prevention and Control (Australia)</h3>
        <p className="small flat">Brisbane, Queensland</p>
        {props.seats && props.seats.length > 0 ?
          <p className="flat">{props.seats.length} available</p>
          :
          <p className="color-warning flat">No seats available</p>
        }
      </div>
    </Link>
  )
}

export default EventsCard;
