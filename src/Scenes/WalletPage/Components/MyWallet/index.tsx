import * as React from 'react';
import './style.css';
import BalanceHeader from './Components/BalanceHeader';
import Details from './Components/Details';

interface MyWalletProps {
  toAction: (action: string) => void;
}

class MyWallet extends React.Component<MyWalletProps, {}> {
  render() {
    return (
      <div className="myWallet slimScroll">
        <div className="balanceHeaderWrapper">
          <BalanceHeader toAction={this.props.toAction}/>
        </div>
        <div className="DetailsWrapper">
          <Details />
        </div>
      </div>
    );
  }
}

export default MyWallet;