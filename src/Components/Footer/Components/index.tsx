import * as React from 'react';
import './style.css';

import ListComp from './ListComp';
import GetInTouch from './GetInTouch';
import Subscribe from './Subscribe';

class FooterContainer extends React.Component<{}, {}> {
  listCompany =  [
    'About',
    'Jobs',
    'Press',
    'Blog',
    'Help',
    'Policies',
    'Terms & Privacy'
  ];
  listDiscover = [
    'Become a Member',
    'Properties List',
    'Sign in',
    'Widgets',
    'Components',
    'Tables',
    'Lists'
  ];
  render() {
    return (
      <div className="footerContainer">
        <div className="footerRow">
            <ListComp list={this.listCompany}>Company</ListComp>
            <ListComp list={this.listDiscover}>Discover</ListComp>
            <GetInTouch />
            <Subscribe />
        </div>
        <div className="footerCopyRight">
          Real estate web application<br/> © 2014
        </div>
      </div>
    );
  }
}

export default FooterContainer;