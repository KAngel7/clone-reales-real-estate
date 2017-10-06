import * as React from 'react';
import './style.css';

class GetInTouch extends React.Component<{}, {}> {
  
  render() {
    return (
      <div className="getInTouch col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="touchTitle osLight">
          {this.props.children}
        </div>
        <ul className="mainList">
          <li className="footer-phone"><span className="fa fa-phone"/> 800 234 67 89</li>
          <li className="footer-address osLight">
            <p>516 Green St</p>
            <p>San Francisco, CA 94133</p>
            <p>United States</p>
          </li>
          <li>
          <a href="#" className="btn btn-sm btn-icon btn-round btn-o btn-white">
            <span className="fa fa-facebook"/>
          </a> 
          <a href="#" className="btn btn-sm btn-icon btn-round btn-o btn-white">
            <span className="fa fa-twitter"/>
          </a> 
          <a href="#" className="btn btn-sm btn-icon btn-round btn-o btn-white">
            <span className="fa fa-google-plus"/>
          </a> 
          <a href="#" className="btn btn-sm btn-icon btn-round btn-o btn-white">
            <span className="fa fa-linkedin"/>
          </a> 
          </li>
        </ul>
      </div>
    );
  }
}

export default GetInTouch;