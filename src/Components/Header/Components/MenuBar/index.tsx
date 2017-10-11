import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import RLForm from '../../../RegisterLoginForm';

interface MenuBarProps {

}

interface MenuBarState {
  isHandlerActive: boolean;
  rlFormStatus?: 'login' | 'register'; 
}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
  constructor(props: MenuBarProps) {
    super(props);
    this.state = {
      isHandlerActive: false
    };
  }
  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive
    });
  }
  // hideHandler = () => {
  //   this.setState({
  //     isHandlerActive: false
  //   });
  // }
  updateFormStatus = (status?: 'login' | 'register') => {
    this.setState({
      rlFormStatus: status
    });
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
            <li><a href="#" onClick={() => this.updateFormStatus('register')}>Sign Up</a></li>
            <li><a href="#" onClick={() => this.updateFormStatus('login')}>Sign In</a></li>
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