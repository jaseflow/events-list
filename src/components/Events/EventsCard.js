import React from 'react';

import './EventsCard.scss'
import Figure from '../shared/Figure';

function EventsCard(props) {
  return (
    <div className="EventsCard">
      <Figure image="/conference.jpg" ratio="1-1" />
      <div>
        <p className="EventsCard__date small">Sat, Mar 22, 2:30PM</p>
        <h3>Infection Prevention and Control (Australia)</h3>
        <p className="small">Brisbane, Queensland</p>
        {props.seats && props.seats.length > 0 ?
          <p>{props.seats.length} available</p>
          :
          <p className="color-warning">No seats available</p>
        }
      </div>
    </div>
  )
}

export default EventsCard;
