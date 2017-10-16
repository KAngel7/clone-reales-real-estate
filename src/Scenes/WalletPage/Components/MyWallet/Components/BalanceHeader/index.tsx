import * as React from 'react';
import './style.css';

interface BalanceHeaderProps {
  toAction: (action: string) => void;
}

class BalanceHeader extends React.Component<BalanceHeaderProps, {}> {
  openActionForm = (action: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.toAction(action);
  }
  render() {
    return (
      <div className="balanceHeader">
        <div className="balanceType">
          <ul>
            <li className="active">USD</li>
            <li>BTC</li>
            <li>ETH</li>
          </ul>
        </div>
        <div className="bnContainer">
          <span className="balanceText">TOTAL BALANCE</span><br />
          <span className="balanceNumber">$74.223</span>
        </div>
        <div className="balanceActions">
          <ul className="actions">
            <li><a
              href="/wallet/withdraw"
              onClick={(e) => this.openActionForm('withdraw', e)}
            >
              <span>Send Money</span>
            </a></li>
            <li><a
              href="/wallet/requestmoney"
              onClick={(e) => this.openActionForm('requestmoney', e)}
            >
              <span>Request Money</span>
            </a></li>
            <li><a
              href="/wallet/deposit"
              onClick={(e) => this.openActionForm('deposit', e)}
            >
              <span>Add Money</span>
            </a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BalanceHeader;