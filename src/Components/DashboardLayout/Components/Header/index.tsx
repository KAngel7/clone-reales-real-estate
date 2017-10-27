import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from 'Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';
import { Link } from 'react-router-dom';

interface HeaderProps {
  clickToggle: Function;
}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="dashboardHeader">
        <div className="logo">
          <Link to="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </Link>
        </div>
        <a href="#" className="navHandler" onClick={(e) => this.props.clickToggle()}><Icon  name="bars" /></a>
        <SearchForm />
        <div className="userMenuWrapper">
          <UserMenu />
        </div>
        <NotifyMenu />
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header;