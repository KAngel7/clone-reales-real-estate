import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';

class MyhousePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="myhousePage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Myhouse Page</h3>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default MyhousePage;