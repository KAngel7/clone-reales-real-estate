import * as React from 'react';
import './style.css';

import SmallActive from './Components/SmallActive';

class LeftSide extends React.Component<{}, {}> {
  render() {
    return (
      <div id="leftSide">
        <SmallActive />
      </div>
    );
  }
}

export default LeftSide;
