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
  doToggle = () => {
    this.setState({
      isExpand: !this.state.isExpand
    });
  }
  render() {
    return (
      <div className="dashboard">
        <div className="headerWrapper">
          <Header clickToggle={this.doToggle} />
        </div>
        <div className="bodyWrapper">
          <LeftSide isExpand={this.state.isExpand} />
          <div className="bodyWrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;