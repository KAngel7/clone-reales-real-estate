import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from '../../Components/DashboardLayout';

class SearchPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="searchPage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Search page</h3>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default SearchPage;