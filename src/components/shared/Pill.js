import React from 'react';

import './Pill.scss'

function Pill(props) {
  return (
    <div className="Pill flex flex--guts padding-l-three padding-r-three">
      {props.text}
    </div>
  )
}

export default Pill;
