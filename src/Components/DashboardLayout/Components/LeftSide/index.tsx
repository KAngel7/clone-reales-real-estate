import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';

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
            <li><a href="explore.html">
              <Icon className="navIcon" name="compass" />
              <span className="navLabel">Explore</span>
            </a>
            </li>
            <li><a href="single.html">
              <Icon className="navIcon icon-home" name="home" />
              <span className="navLabel">Single</span>
            </a>
            </li>
            <li><a href="add.html">
              <Icon className="navIcon" name="plus-circle" />
              <span className="navLabel">New</span>
            </a>
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
