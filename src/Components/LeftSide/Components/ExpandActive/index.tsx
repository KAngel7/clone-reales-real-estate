import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

interface ExpandActiveProps {

}

interface ExpandActiveState {
  isActive: boolean;
}

class ExpandActive extends React.Component<ExpandActiveProps, ExpandActiveState> {
  constructor(props: ExpandActiveProps) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleShow = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className="slimScrollDiv">
        <nav className="leftNav scrollable bigNav">
          <div className="search">
            <span className="searchIcon icon-magnifier" />
            <input type="text" placeholder="Search for houses, apartments..." />
            <div className="clearfix" />
          </div>
          <ul>
            <li><a href="explore.html">
              <Icon className="navIcon icon-compass" name="compass" />
              <span className="navLabel">Explore</span>
            </a>
            </li>
            <li><a href="single.html">
              <Icon className="navIcon icon-home" name="home" />
              <span className="navLabel">Single</span>
            </a>
            </li>
            <li><a href="add.html">
              <Icon className="navIcon icon-plus" name="plus-circle" />
              <span className="navLabel">New</span>
            </a>
            </li>
            <li className={`hasSub hasSubActive${this.state.isActive ? ' active' : ''}`} onClick={this.toggleShow}>
              <a href="#"><Icon className="navIcon icon-drop" name="tint" />
                <span className="navLabel">Colors</span>
                <Icon 
                  className="fa fa-angle-left arrowRight" 
                  name={`${this.state.isActive ? 'angle-left' : 'angle-down'}`} 
                />
                <span className="badge bg-yellow">5</span></a>
              <ul className={`colors${this.state.isActive ? ' bigList' : ''}`}>
                <li><a href="#" data-style="css/app-red.css">Red
                  <span className="fa fa-circle-o c-red icon-right" /></a></li>
                <li><a href="#" data-style="css/app.css">Green
                  <span className="fa fa-circle-o c-green icon-right" /></a></li>
                <li><a href="#" data-style="css/app-blue.css">Blue
                  <span className="fa fa-circle-o c-blue icon-right" /></a></li>
                <li><a href="#" data-style="css/app-yellow.css">Yellow
                  <span className="fa fa-circle-o c-yellow icon-right" /></a></li>
                <li><a href="#" data-style="css/app-magenta.css">Magenta
                  <span className="fa fa-circle-o c-magenta icon-right" /></a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="slimScrollBar" />
        <div className="slimScrollRail" />
      </div>
    );
  }
}

export default ExpandActive;