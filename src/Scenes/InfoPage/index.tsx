import * as React from 'react';
import './style.css';
import Dashboard from '../../Components/DashboardLayout';
import { RouteComponentProps } from 'react-router-dom';

class InfoPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="infoPage">
        <Dashboard >
          <div className="infoWrapper">
            <h2>INFO PAGE</h2>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default InfoPage;