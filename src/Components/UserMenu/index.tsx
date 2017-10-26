import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

interface UserMenuProps {

}

interface UserMenuState {
  showMenu: boolean;
}

class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
  wrapperRef: HTMLDivElement | null;
  constructor(props: UserMenuProps) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  showToggle = () => {
    if (this.state.showMenu) {
      document.removeEventListener('click', this.handleClickOutside);
    } else {
      document.addEventListener('click', this.handleClickOutside);
    }
    this.setState({
      showMenu: !this.state.showMenu
    });
    
  }
  handleClickOutside = (e: MouseEvent) => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(e.target as Node) &&
      this.state.showMenu
    ) {
      this.showToggle();
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
  logout = () => {
    /* Test code */
    localStorage.setItem('loginStatus', 'false');
    window.location.href = '/';
    /* End test code */
  }
  render() {
    return (
      <div 
        className={`userMenuContainer${this.state.showMenu ? ' open' : ''}`} 
        onClick={this.showToggle}
        ref={(div) => {this.wrapperRef = div; }}
      >
        <a href="#" className="userHandler dropdown-toggle" data-toggle="dropdown">
          <Icon name="user-o" /><span className="counter">5</span></a>
        <a href="#" className="headerUser dropdown-toggle" data-toggle="dropdown">
          <img className="avatar headerAvatar pull-left" src="http://mariusn.com/themes/reales/images/avatar-1.png" />
          <div className="userTop pull-left">
            <span className="headerUserName">John Smith</span>
            <Icon name="angle-down" />
          </div>
          <div className="clearfix" />
        </a>
        <div className="dropdown-menu pull-right userMenu" role="menu">
          <div className="mobAvatar">
            <img
              className="avatar mobAvatarImg"
              src="http://mariusn.com/themes/reales/images/avatar-1.png"
              alt="avatar"
            />
            <div className="mobAvatarName">John Smith</div>
          </div>
          <ul>
            <li><Link to="/wallet"><span className="walletIcon fa" />Wallet</Link></li>
            <li><a href="#"><Icon name="cog" />Settings</a></li>
            <li><Link to="/myprofile"><Icon name="user" />Profile</Link></li>
            <li><a href="#">
              <Icon name="bell-o" />
              Notifications
              <span className="badge pull-right bg-red">5</span>
            </a></li>
            <li className="divider" />
            <li><a href="#" onClick={this.logout}><Icon name="power-off" />Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserMenu;