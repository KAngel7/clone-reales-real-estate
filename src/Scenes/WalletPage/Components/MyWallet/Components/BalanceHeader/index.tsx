import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class BalanceHeader extends React.Component<{}, {}> {
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
            <li><Link to="/wallet/withdraw"><span>Send Money</span></Link></li>
            <li><Link to="/wallet/request"><span>Request Money</span></Link></li>
            <li><Link to="/wallet/deposit"><span>Add Money</span></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BalanceHeader;