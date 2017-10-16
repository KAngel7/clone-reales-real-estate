import * as React from 'react';
import './style.css';

class DepositForm extends React.Component<{}, {}> {
  render() {
    return (
      <div className="depositForm">
        <span><h2>Deposit Form</h2></span>
        <form>
          <div className="input-group">
            <span className="input-group-addon">Amount</span>
            <input type="text" className="form-control" placeholder="Amount" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">Type</span>
            <input type="text" className="form-control" placeholder="Type Info" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">Method</span>
            <input type="text" className="form-control" placeholder="Method Info" />
          </div>
        </form>
      </div>
    );
  }
}

export default DepositForm;