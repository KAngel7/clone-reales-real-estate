import * as React from 'react';
import './style.css';

class Header2 extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header2">
        <div className="logo">
          <a href="index.html">
            <span className="fa fa-home marker" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler"><span className="fa fa-bars" /></a>
        <div className="search">
          <span className="searchIcon icon-magnifier" />
          <input type="text" placeholder="Search for houses, apartments..." />
        </div>
        <div className="headerUserWraper">
          <a href="#" className="userHandler dropdown-toggle" data-toggle="dropdown">
            <span className="icon-user" /><span className="counter">5</span></a>
          <a href="#" className="headerUser dropdown-toggle" data-toggle="dropdown">
            <img className="avatar headerAvatar pull-left" src="http://mariusn.com/themes/reales/images/avatar-1.png" alt="avatar" />
            <div className="userTop pull-left">
              <span className="headerUserName">John Smith</span>
              <span className="fa fa-angle-down" />
            </div>
            <div className="clearfix" />
          </a>
          <div className="dropdown-menu pull-right userMenu" role="menu">
            <div className="mobAvatar">
              <img className="avatar mobAvatarImg" src="images/avatar-1.png" alt="avatar" />
              <div className="mobAvatarName">John Smith</div>
            </div>
            <ul>
              <li><a href="#"><span className="icon-settings" />Settings</a></li>
              <li><a href="profile.html"><span className="icon-user" />Profile</a></li>
              <li><a href="#">
                <span className="icon-bell" />Notifications
      <span className="badge pull-right bg-red">5</span></a></li>
              <li className="divider" />
              <li><a href="#"><span className="icon-power" />Logout</a></li>
            </ul>
          </div>
        </div>
        <div className="headerNotifyWraper">
          <a href="#" className="headerNotify dropdown-toggle" data-toggle="dropdown">
            <span className="notifyIcon icon-bell" />
            <span className="counter">5</span>
          </a>
          <div className="dropdown-menu pull-right notifyMenu" role="menu">
            <div className="notifyHeader">
              <span>Notifications</span>
              <a href="#" className="notifySettings icon-settings" />
              <div className="clearfix" />
            </div>
            <ul className="notifyList">
              <li>
                <a href="#">
                  <img className="avatar pull-left" src="images/avatar-1.png" alt="avatar" />
                  <div className="pulse border-grey" />
                  <div className="notify pull-left">
                    <div className="notifyName">Sed ut perspiciatis unde</div>
                    <div className="notifyTime">5 minutes ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="notifyRound notifyRound-red fa fa-envelope-o" />
                  <div className="pulse border-red" />
                  <div className="notify pull-left">
                    <div className="notifyName">Lorem Ipsum is simply dummy text</div>
                    <div className="notifyTime">20 minutes ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="notifyRound notifyRound-yellow fa fa-heart-o" />
                  <div className="pulse border-yellow" />
                  <div className="notify pull-left">
                    <div className="notifyName">It is a long established fact</div>
                    <div className="notifyTime">2 hours ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="notifyRound notifyRound-magenta fa fa-paper-plane-o" />
                  <div className="pulse border-magenta" />
                  <div className="notify pull-left">
                    <div className="notifyName">There are many variations</div>
                    <div className="notifyTime">1 day ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
            </ul>
            <a href="#" className="notifyAll">See All</a>
          </div>
        </div>
        <a href="#" className="mapHandler"><span className="icon-map" /></a>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header2;