import * as React from 'react';
import './style.css';
import Header from './Components/Header';
import LeftSide from './Components/LeftSide';

interface DashboardState {
  isExpand: boolean;
}

class Dashboard extends React.Component<{}, DashboardState> {
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
  }
  toggleLeftSide = () => {
    this.setState({
      isExpand: !this.state.isExpand
    });
  }
  clickOutsideLeftSide = () => {
    if (this.state.isExpand) {
      this.toggleLeftSide();
    }
  }
  render() {
    return (
      <div className="dashboard">
        <div className="headerWrapper" onClick={this.clickOutsideLeftSide}>
          <Header clickToggle={this.toggleLeftSide} />
        </div>
        <div className="bodyWrapper">
          <LeftSide isExpand={this.state.isExpand} />
          <div 
            className={'contentWrapper' + (this.state.isExpand ? ' smallSize' : '')}
            onClick={this.clickOutsideLeftSide}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;