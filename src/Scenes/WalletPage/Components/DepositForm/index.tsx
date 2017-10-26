import * as React from 'react';
import './style.css';
import SelectComponent from 'Components/SelectComponent';

class DepositForm extends React.Component<{}, {}> {
  types = [
    'Bitcoin',
    'USD'
  ];
  methods = [
    'Bank',
    'COD'
  ];
  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Deposit Form</h3>
        </div>
        <div className="depositForm dashboardBody panel panel-default">
          <form>
            <div className="input-group form-group">
              <span className="input-group-addon">Amount</span>
              <input type="text" className="form-control" placeholder="Amount" />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Type</span>
              <SelectComponent listItem={this.types} />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Method</span>
              <SelectComponent listItem={this.methods} />
            </div>
            <div className="button-group form-group">
              <div className="btn btn-white" onClick={(e) => history.back()}>{'<< Back'}</div>
              <button className="btn btn-green">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DepositForm;