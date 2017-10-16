import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';

class Details extends React.Component<{}, {}> {
  render() {
    return (
      <div className="details">
        <div className="detailTab">
          <ul>
            <li className="active"><a><Icon name="bell-o" /> Activities</a></li>
            <li><a><Icon name="bar-chart" /> Statistics</a></li>
            <li><a><Icon name="sliders" /> Sumary</a></li>
          </ul>
        </div>
        <div className="detailBody">
          {}
        </div>
      </div>
    );
  }
}

export default Details;