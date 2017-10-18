import * as React from 'react';
import './style.css';

class SlideShow extends React.Component<{}, {}> {
  
  render() {
    return (
      <div className="slideShow">
        <ul className="cbSlideshow">
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
          <li><span/></li>
        </ul>
      </div>
    );
  }
}

export default SlideShow;