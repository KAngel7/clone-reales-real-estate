import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

interface NotifyMenuProps {

}

interface NotifyMenuState {
  showMenu: boolean;
  infoHover: boolean;
  mailHover: boolean;
}

class NotifyMenu extends React.Component<NotifyMenuProps, NotifyMenuState> {
  constructor(props: NotifyMenuProps) {
    super(props);
    this.state = {
      showMenu: false,
      infoHover: false,
      mailHover: false
    };
  }

  showMenu = () => {
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

  infoHover = () => {
    this.setState({
      infoHover: true
    });
    document.addEventListener('mouseout', this.endInfoHover);
  }

  mailHover = () => {
    this.setState({
      mailHover: true
    });
    document.addEventListener('mouseout', this.endMailHover);
  }

  endInfoHover = () => {
    this.setState({
      infoHover: false
    });
    document.removeEventListener('mouseout', this.endInfoHover);
  }

  endMailHover = () => {
    this.setState({
      mailHover: false
    });
    document.removeEventListener('mouseout', this.endMailHover);
  }

  render() {
    return (
        <div className={`headerNotifyWraper ${this.state.showMenu ? 'open' : ''}`} onClick={this.showMenu}>
          <a href="#" className="headerNotify dropdown-toggle" data-toggle="dropdown">
            <Icon name="bell-o" />
            <span className="counter">5</span>
          </a>
          <div className="dropdown-menu pull-right notifyMenu" role="menu">
            <div className="notifyHeader">
              <span>Notifications</span>
              <a href="#" className="notifySettings"><Icon name="cog" /></a>
              <div className="clearfix" />
            </div>
            <ul className="notifyList">
              <li onMouseOver={this.infoHover}>
                <a href="#">
                  <img className="avatar pull-left" src="http://mariusn.com/themes/reales/images/avatar-1.png" />
                  <div className={`pulse border-grey ${this.state.infoHover ? 'pulsate' : ''}`} />
                  <div className="notify pull-left">
                    <div className="notifyName">Sed ut perspiciatis unde</div>
                    <div className="notifyTime">5 minutes ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li onMouseOver={this.mailHover}>
                <a href="#">
                  <div className="notifyRound notifyRound-red">
                    <Icon name="envelope-o" />
                  </div>
                  <div className={`pulse border-red ${this.state.mailHover ? 'pulsate' : ''}`} />
                  <div className="notify pull-left">
                    <div className="notifyName">Lorem Ipsum is simply dummy text</div>
                    <div className="notifyTime">20 minutes ago</div>
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="notifyRound notifyRound-yellow heart-o" />
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
                  <div className="notifyRound notifyRound-magenta paper-plane-o" />
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
    );
  }
}

export default NotifyMenu;