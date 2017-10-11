import * as React from 'react';
import './style.css';

import UserMenu from './UserMenu';
import NotifyMenu from './NotifyMenu';

class Header2 extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header2">
        <div className="logo">
          <a href="index.html">
            <span className="home marker" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler"><span className="bars" /></a>
        <div className="search">
          <span className="searchIcon icon-magnifier" />
          <input type="text" placeholder="Search for houses, apartments..." />
        </div>
        <UserMenu />
        <NotifyMenu />
        <a href="#" className="mapHandler"><span className="icon-map" /></a>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header2;