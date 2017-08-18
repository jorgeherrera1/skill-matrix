import React from 'react';
import './header.scss';

const Header = () => (
  <header className="mdl-layout__header mdl-layout__header--transparent">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title header__app-title">Skill Matrix</span>
      <div className="mdl-layout-spacer"></div>
    </div>
  </header>
);

export default Header;
