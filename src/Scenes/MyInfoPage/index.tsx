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
            <MyInfoForm />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default InfoPage;