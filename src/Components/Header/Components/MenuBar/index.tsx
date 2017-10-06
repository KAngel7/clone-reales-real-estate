import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';

interface MenuBarState {
  isHandlerActive: boolean;
}

class MenuBar extends React.Component<{}, MenuBarState> {
  constructor() {
    super();
    this.state = {
      isHandlerActive: false
    };
  }
  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive
    });
  }
  render() {
    return (
      <div className="menuBar">
        <a href="/">
          <div className="homeLogo osLight">
            <Icon name="home" size="2x" /> 
            <span>Reales</span>
          </div>
        </a>
        <a 
          href="#" 
          className={'home-navHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')} 
          onClick={this.toggleHandler}
        >
          <Icon name="bars" />
        </a>
        <div className={'home-nav' + (this.state.isHandlerActive ? ' active' : '')} >
          <ul>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Find agent</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a className="btn btn-green">List a Property</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;