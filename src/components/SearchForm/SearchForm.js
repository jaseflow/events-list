import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './SearchForm.scss';

function SearchForm(props) {

  return (
    <form className="SearchForm">
      <div className="SearchFormName">
        <FontAwesomeIcon icon={faSearch} className="SearchFormName__search" />
        <input
          type="text"
          className="input SearchFormName__input"
          placeholder="Search for an event"
        />
      </div>
      <div className="SearchFormLocation">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="SearchFormLocation__marker" />
        <select
          id="location"
          name="location"
          className="input input--select SearchFormLocation__input">
          <option selected value="anywhere">Anywhere</option>
          <option value="brisbane">Brisbane</option>
          <option value="goldcoast">Gold Coast</option>
          <option value="cairns">Cairns</option>
        </select>
        <FontAwesomeIcon icon={faChevronDown} className="SearchFormLocation__arrow" />
      </div>
    </form>
  )
}

export default SearchForm;
