import React from 'react';

import './EventHero.scss'
import Figure from '../shared/Figure';

function EventHero(props) {
  return (
    <div className="EventHero margin-b-four">
      <div className="EventHero__img">
        <Figure image={props.image} ratio="21-9"></Figure>
      </div>
      <div className="EventHero__scrim padding-a-four">
        <div className="container">
          <h1 className="margin-b-one">{props.title}</h1>
          <p className="flat">{props.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default EventHero;
