import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from './Components/UserMenu';
import NotifyMenu from './Components/NotifyMenu';
import SearchForm from './Components/SearchForm';

interface Header2Props {
  clickToggle: any;
}

interface Header2State {

}

class Header2 extends React.Component<Header2Props, Header2State> {
  constructor(props: Header2Props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="header2">
        <div className="logo">
          <a href="/">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler" onClick={this.props.clickToggle}><Icon  name="bars" /></a>
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