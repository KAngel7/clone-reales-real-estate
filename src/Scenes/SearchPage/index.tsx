import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import MyWallet from './Components/MyWallet';
import Dashboard from '../../Components/DashboardLayout';

class SearchPage extends React.Component<RouteComponentProps<any>, {}> {
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
  }
  render() {
    return (
      <div className="searchPage">
        <Dashboard>
          <div className="walletWrapper">
            <MyWallet />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default SearchPage;