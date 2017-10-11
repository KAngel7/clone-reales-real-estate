import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from './Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';

class Header2 extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header2">
        <div className="logo">
          <a href="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler"><Icon  name="bars" /></a>
        <SearchForm />
        <UserMenu />
        <NotifyMenu />
        <a href="#" className="mapHandler"><Icon name="map-o" /></a>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header2;