import * as React from 'react';
import './style.css';

class DepositForm extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Deposit Form</h3>
        </div>
        <div className="depositForm">
          <form>
            <div className="input-group form-group">
              <span className="input-group-addon">Amount</span>
              <input type="text" className="form-control" placeholder="Amount" />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Type</span>
              <input type="text" className="form-control" placeholder="Type Info" />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Method</span>
              <input type="text" className="form-control" placeholder="Method Info" />
            </div>
            <div className="button-group form-group">
              <button className="btn btn-white">{'<< Back'}</button>
              <button className="btn btn-green">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DepositForm;