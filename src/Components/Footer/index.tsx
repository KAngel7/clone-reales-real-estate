import * as React from 'react';
import './style.css';

import FooterContainer from './Components';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footerWrapper">
        <FooterContainer />
      </div>
    );
  }
}

export default Footer;