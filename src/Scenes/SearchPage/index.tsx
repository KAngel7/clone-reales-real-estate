import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header2 from '../../Components/Header2';
import MyWallet from './Components/MyWallet';

class SearchPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="searchPage">
        <div className="headerWrapper">
          <Header2 />
        </div>
        <div className="bodyWrapper">
          <div className="walletWrapper">
            <MyWallet />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;