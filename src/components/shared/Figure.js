import React from 'react';

import './Figure.scss'

function Figure(props) {
  return (
    <figure className={`Figure Figure--${props.ratio}`}>
      <div className="Figure__content">
        <img src={props.image} className="Figure__img" alt="" />
      </div>
    </figure>
  )
}

export default Figure;
