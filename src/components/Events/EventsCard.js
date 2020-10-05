import React from 'react';

import { Link } from 'react-router-dom';

import './EventsCard.scss'
import Figure from '../shared/Figure';

function EventsCard(props) {
  const formattedDate = new Date(props.time).toLocaleDateString(
    'en-au',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
  );
  return (
    <Link to={`/event/${props.id}`} className="EventsCard">
      <Figure image="/conference.jpg" ratio="1-1" />
      <div>
        <p className="EventsCard__date small margin-b-one">{formattedDate}</p>
        <h3 className="flat">{props.title}</h3>
        <p className="small flat">{props.location.City}, {props.location.State}</p>
        {props.availability && props.availability.length > 0 ?
          <p className="flat">{props.availability.length} seats available</p>
          :
          <p className="color-warning flat">No seats available</p>
        }
      </div>
    </Link>
  )
}

export default EventsCard;
