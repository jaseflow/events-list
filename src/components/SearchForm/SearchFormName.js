import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchFormName(props) {
  return (
    <div className="SearchFormName">
      <FontAwesomeIcon icon={faSearch} className="SearchFormName__search" />
      <input
        type="text"
        className="input SearchFormName__input"
        placeholder="Search for an event"
      />
    </div>
  )
}

export default SearchFormName;
