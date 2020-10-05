import React from 'react';

import './Header.scss';

import logo from '../../assets/events.svg';
import SearchForm from '../SearchForm/SearchForm';

function Header(props) {
  return (
    <div className="Header flex flex--guts">
      <img className="Header__logo" src={logo} alt="" />
      <div className="Header__search">
        <SearchForm />
      </div>
    </div>
  )
}

export default Header;
