import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from 'Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';

interface HeaderProps {
  clickToggle: any;
}

interface Header2State {

}

class Header extends React.Component<HeaderProps, Header2State> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="dashboardHeader">
        <div className="logo">
          <a href="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler" onClick={this.props.clickToggle}><Icon  name="bars" /></a>
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