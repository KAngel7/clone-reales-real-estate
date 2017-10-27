import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import MyWallet from './Components/MyWallet';
import DepositForm from './Components/DepositForm';
import WithdrawForm from './Components/WithdrawForm';
import RequestForm from './Components/RequestForm';
import Dashboard from 'Components/DashboardLayout';

class WalletPage extends React.Component<RouteComponentProps<{action: string}>, {}> {
  WalletPageSection: {
    myWallet: JSX.Element;
    deposit: JSX.Element;
    withdraw: JSX.Element;
    request: JSX.Element;
    notfound: null;
  };
  constructor() {
    super();
    this.WalletPageSection = {
      myWallet: (<MyWallet />),
      deposit: (<DepositForm />),
      withdraw: (<WithdrawForm />),
      request: (<RequestForm />),
      notfound: (null)
    };
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
      case 'request': 
        return this.WalletPageSection.request;
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