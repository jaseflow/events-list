import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import logo from '../../assets/events.svg';
import SearchForm from '../SearchForm/SearchForm';

function Header(props) {

  return (
    <div className="Header flex flex--guts margin-b-two">
      <Link to="/" className="Header__logo">
        <img src={logo} alt="" />
      </Link>
      <div className="Header__search">
        <SearchForm />
      </div>
    </div>
  )
}

export default Header;
