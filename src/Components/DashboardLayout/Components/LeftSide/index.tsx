import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

interface LeftSideProps {
  isExpand: boolean;
}

class LeftSide extends React.Component<LeftSideProps, {}> {
  toggleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (this.props.isExpand) {
      e.preventDefault();
    }
    const target = e.currentTarget;
    if (this.props.isExpand && target.parentElement) {
      target.parentElement.classList.toggle('active');
    }
  }
  render() {
    return (
      <div className={`leftSide slimScroll${this.props.isExpand ? ' expanded' : ' minimized'}`}>
        <nav className="leftNav scrollable bigNav">
          <ul>
            <li><Link to="/search">
              <Icon className="navIcon" name="compass" />
              <span className="navLabel">Search</span>
            </Link></li>
            <li className="hasSub hasSubActive">
              <Link to="/newproperty/sell" onClick={this.toggleActive}>
                <Icon className="navIcon" name="plus-circle" />
                <span className="navLabel">Add Property</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/newproperty/sell">
                  Sell<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/newproperty/rent">
                  Rent<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/newproperty/renovation">
                  Renovation<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/property/mylisting" onClick={this.toggleActive}>
                <Icon className="navIcon icon-home" name="home" />
                <span className="navLabel">Properties</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/property/mylisting">
                  My listing<Icon name="circle-o" className="icon-right" />
              </Link></li>
                <li><Link to="/property/mywishlist">
                  My wishlist<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/property/myviewing">
                  My viewing<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/agent/myagents" onClick={this.toggleActive}>
                <Icon className="navIcon" name="user" />
                <span className="navLabel">Agents</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/agent/myagents">
                  My Agents<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/agent/search">
                  Find Agents<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/advice/buying" onClick={this.toggleActive}>
                <Icon className="navIcon" name="comments" />
                <span className="navLabel">Advice</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
                {/* <span className="badge bg-yellow">5</span> */}
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/advice/buying">
                  Buying<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/advice/selling">
                  Selling<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/advice/design">
                  Design<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/advice/renovations">
                  Renovations<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSide;
