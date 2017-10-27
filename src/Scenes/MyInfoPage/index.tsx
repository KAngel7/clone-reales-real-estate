import * as React from 'react';
import './style.css';
import Dashboard from 'Components/DashboardLayout';
import MyInfoForm from './Components/MyInfoForm';
import { RouteComponentProps } from 'react-router-dom';

class InfoPage extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <div className="infoPage">
        <Dashboard >
          <div className="infoWrapper">
            <div className="dashboardTitle">
                <h3>Your details</h3>
                <h5>We'd love to find out more about you. It'll help us make
                sure our website and apps tick the right boxes.</h5>
            </div>
            <MyInfoForm />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default InfoPage;