import React from 'react';

import './SearchForm.scss';

import SearchFormName from './SearchFormName';
import SearchFormLocation from './SearchFormLocation';

function SearchForm(props) {
  return (
    <form className="SearchForm">
      <SearchFormName />
      <SearchFormLocation />
    </form>
  )
}

export default SearchForm;
