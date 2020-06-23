import React from 'react';
import { Link } from 'react-router-dom';

import './main.scss';

const Nav = (props) => {

  const { headerTitle } = props;

  return (
    <div className="c-navbar row align-items-center">
      <div className="col-auto px-2">
        <Link className="c-navbar__btn-back" to="/"><i className="fas fa-arrow-left" /></Link>
      </div>
      <div className="col">
        <h3 className="c-navbar__header">{ headerTitle ? headerTitle : 'Store-Apps' }</h3>
      </div>
    </div>
  );
};

export default Nav;