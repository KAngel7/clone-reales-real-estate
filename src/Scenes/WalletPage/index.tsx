import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import MyWallet from './Components/MyWallet';
import DepositForm from './Components/DepositForm';
import Dashboard from '../../Components/DashboardLayout';

class WalletPage extends React.Component<RouteComponentProps<any>, {}> {
  WalletPageSection = {
    myWallet: (<MyWallet />),
    deposit: (<DepositForm />),
    withdraw: (<div />),
    notfound: (null),
  };
  constructor() {
    super();
  }
  matchSection = () => {
    const walletAction = this.props.match.params.action;
    switch (walletAction) {
      case undefined: 
        return this.WalletPageSection.myWallet;
      case 'deposit': 
        return this.WalletPageSection.deposit;
      case 'withdraw': 
        return this.WalletPageSection.withdraw;
      default:
        return this.WalletPageSection.notfound;
    }
  }
  render() {
    return (
      <div className="walletPage">
        <Dashboard>
          <div className="walletWrapper">
            {this.matchSection()}
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default WalletPage;