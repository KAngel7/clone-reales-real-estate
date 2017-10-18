import * as React from 'react';
import './style.css';
import Dashboard from 'Components/DashboardLayout';
import AddNewPropertyForm from './Components/AddNewPropertyForm';
import { RouteComponentProps } from 'react-router-dom';

class NewPropertyPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="infoPage">
        <Dashboard >
          <div className="infoWrapper">
            <div className="dashboardTitle">
                <h3>Add new property</h3>
                <h5>We'd love to find out more about you. It'll help us make
                sure our website and apps tick the right boxes.</h5>
            </div>
            <AddNewPropertyForm />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default NewPropertyPage;