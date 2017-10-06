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
            <span>House</span>
          </div>
        </a>
        <a 
          href="#" 
          className={'homeNavHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')} 
          onClick={this.toggleHandler}
        >
          <Icon name="bars" />
        </a>
        <div className={'homeNav' + (this.state.isHandlerActive ? ' active' : '')} >
          <ul>
            <li className="moreOption"><a href="#">Buy</a></li>
            <li className="moreOption"><a href="#">Rent</a></li>
            <li className="moreOption"><a href="#">Find agent</a></li>
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