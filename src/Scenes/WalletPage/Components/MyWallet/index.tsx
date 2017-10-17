import * as React from 'react';
import './style.css';
import BalanceHeader from './Components/BalanceHeader';
import Details from './Components/Details';

class MyWallet extends React.Component<{}, {}> {
  render() {
    return (
      <div className="myWallet slimScroll">
        <div className="balanceHeaderWrapper">
          <BalanceHeader />
        </div>
        <div className="DetailsWrapper">
          <Details />
        </div>
      </div>
    );
  }
}

export default MyWallet;