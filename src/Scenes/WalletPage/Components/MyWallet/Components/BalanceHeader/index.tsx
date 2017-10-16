import * as React from 'react';
import './style.css';

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
          <ul className="features">
            <li><div>Send Money</div></li>
            <li><div>Request Money</div></li>
            <li><div>Add Money</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BalanceHeader;