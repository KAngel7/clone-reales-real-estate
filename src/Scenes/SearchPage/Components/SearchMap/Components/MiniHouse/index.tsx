import * as React from 'react';
import './style.css';
import { Coords } from 'google-map-react';

interface MiniHouseProps extends Coords {

}

class MiniHouse extends React.Component<MiniHouseProps, {}> {
  render() {
    return (
      <div className="miniHouse">
        <div className="miniHouseIcon" />
      </div>
    );
  }
}

export default MiniHouse;