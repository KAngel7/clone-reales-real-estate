import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';

class NewPropertyPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="newPropertyPage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>New Property</h3>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default NewPropertyPage;