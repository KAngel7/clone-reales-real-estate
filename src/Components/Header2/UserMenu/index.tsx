import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

interface UserMenuProps {

}

interface UserMenuState {
  showMenu: boolean;
}

class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
  constructor(props: UserMenuProps) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  showUserMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
    document.addEventListener('click', this.hideMenu);
  }

  hideMenu = () => {
    this.setState({
      showMenu: false
    });
    document.removeEventListener('click', this.hideMenu);
  }
  render() {
    return (
      <div className={`headerUserWraper ${this.state.showMenu ? 'open' : ''}`} onClick={this.showUserMenu}>
        <a href="#" className="userHandler dropdown-toggle" data-toggle="dropdown">
          <Icon className="icon-user" name="user-o" /><span className="counter">5</span></a>
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
            <img className="avatar mobAvatarImg" src="images/avatar-1.png" alt="avatar" />
            <div className="mobAvatarName">John Smith</div>
          </div>
          <ul>
            <li><a href="#"><Icon name="cog" />Settings</a></li>
            <li><a href="profile.html"><Icon name="user" />Profile</a></li>
            <li><a href="#">
              <Icon name="bell-o"/>Notifications
  <span className="badge pull-right bg-red">5</span></a></li>
            <li className="divider" />
            <li><a href="#"><Icon name="power-off" />Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserMenu;