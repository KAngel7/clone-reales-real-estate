import * as React from 'react';
import './style.css';
import SmallActive from './Components/SmallActive';
import ExpandActive from './Components/ExpandActive';

interface LeftSideProps {
  isExpand: boolean;
}

class LeftSide extends React.Component<LeftSideProps, {}> {

  render() {
    return (
      <div id="leftSide" className={`${this.props.isExpand ? 'expanded' : ''}`}>
        {this.props.isExpand ? <ExpandActive /> : <SmallActive />}
      </div>
    );
  }
}

export default LeftSide;
