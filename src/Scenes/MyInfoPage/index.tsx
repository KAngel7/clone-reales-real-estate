import * as React from 'react';
import './style.css';
import Dashboard from '../../Components/DashboardLayout';
import MyInfoForm from './MyInfoForm';
import { RouteComponentProps } from 'react-router-dom';

class InfoPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="infoPage">
        <Dashboard >
          <div className="infoWrapper">
            <div className="myInfoHeader">
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