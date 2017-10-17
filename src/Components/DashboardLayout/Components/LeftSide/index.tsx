import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

interface LeftSideProps {
  isExpand: boolean;
}

class LeftSide extends React.Component<LeftSideProps, {}> {
  toggleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if (this.props.isExpand && target.parentElement) {
      target.parentElement.classList.toggle('active');
    }
  }
  render() {
    return (
      <div className={`leftSide${this.props.isExpand ? ' expanded' : ''}`}>
        <nav className="leftNav scrollable bigNav">
          <ul>
            <li><Link to="/search">
              <Icon className="navIcon" name="compass" />
              <span className="navLabel">Search</span>
            </Link>
            </li>
            <li><Link to="/myhouse">
              <Icon className="navIcon icon-home" name="home" />
              <span className="navLabel">My house</span>
            </Link>
            </li>
            <li><Link to="/newproperty">
              <Icon className="navIcon" name="plus-circle" />
              <span className="navLabel" style={{}}>Add Property</span>
            </Link>
            </li>
            <li className="hasSub hasSubActive">
              <a href="#" onClick={this.toggleActive}>
                <Icon className="navIcon" name="tint" />
                <span className="navLabel">Colors</span>
                <Icon className="closeIcon arrowRight" name="angle-left"/>
                <Icon className="openIcon arrowRight" name="angle-down"/>
                <span className="badge bg-yellow">5</span>
              </a>
              <ul className="colors secondUl">
                <li><a href="#" data-style="css/app-red.css">
                  Red<span className="fa fa-circle-o c-red icon-right" />
                </a></li>
                <li><a href="#" data-style="css/app.css">Green
                  <span className="fa fa-circle-o c-green icon-right" />
                </a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSide;
