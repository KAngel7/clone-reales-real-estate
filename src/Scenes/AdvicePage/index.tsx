import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';

class AdvicePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="advicePage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Advices ({this.props.match.params.type})</h3>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default AdvicePage;