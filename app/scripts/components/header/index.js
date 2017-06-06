import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed"
          data-toggle="collapse" data-target="#skill-matrix-nav" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Skill Matrix</a>
      </div>
      <div id="skill-matrix-nav" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;