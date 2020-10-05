import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbs.scss'

function Breadcrumbs(props) {
  return (
    <div className="Breadcrumbs flex small margin-b-two">
      <Link to="/">Events</Link>
      <i className="margin-l-one margin-r-one">/</i>
      <span>Infection Prevention and Control (Australia)</span>
    </div>
  )
}

export default Breadcrumbs;
