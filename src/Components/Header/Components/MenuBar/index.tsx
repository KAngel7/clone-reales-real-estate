import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import RLForm from '../../../RegisterLoginForm';
import UserMenu from '../../../UserMenu';

interface MenuBarProps {

}

interface MenuBarState {
  isHandlerActive: boolean;
  rlFormStatus?: 'login' | 'register'; 
  isLogin: boolean;
}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
  constructor(props: MenuBarProps) {
    super(props);
    /* Test code */
    const loginStatus: boolean = localStorage.getItem('loginStatus') === 'true';
    /* End test code */
    this.state = {
      isHandlerActive: false,
      isLogin: loginStatus
    };
  }
  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive
    });
  }
  updateFormStatus = (status?: 'login' | 'register') => {
    this.setState({
      rlFormStatus: status
    });
  }
  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className="userMenuLi">
          <div className="userMenuWrapper">
            <UserMenu />
          </div>
        </li>
      );
    }
    return [
      (<li key="0"><a href="#" onClick={() => this.updateFormStatus('register')}>Sign Up</a></li>),
      (<li key="1"><a href="#" onClick={() => this.updateFormStatus('login')}>Sign In</a></li>)
    ];
  }
  render() {
    return (
      <div className="menuBar">
        <a href="/">
          <div className="homeLogo osLight">
            <Icon name="home" size="2x" /> 
            <span>House</span>
          </div>
        </a>
        <a 
          href="#" 
          className={'homeNavHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')} 
          onClick={this.toggleHandler}
        >
          <Icon name="bars" />
        </a>
        <div className={'homeNav' + (this.state.isHandlerActive ? ' active' : '')} >
          <ul>
            <li className="moreOption"><a href="#">Buy</a></li>
            <li className="moreOption"><a href="#">Rent</a></li>
            <li className="moreOption"><a href="#">Find agent</a></li>
            {this.loginField()}
            <li><a href="/search" className="btn btn-green">List a Property</a></li>
          </ul>
        </div>
        <RLForm 
          type={this.state.rlFormStatus} 
          openRegisterForm={() => this.updateFormStatus('register')} 
          openLoginForm={() => this.updateFormStatus('login')}
          close={() => this.updateFormStatus()}
        />
      </div>
    );
  }
}

export default MenuBar;