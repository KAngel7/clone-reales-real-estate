import * as React from 'react';
import './style.css';

import SelectComponent from './SelectComponent';

class SelectBar extends React.Component<{}, {}> {
  listBed = [
    'Bedrooms',
    '1',
    '2',
    '3',
    '4'
  ];
  listBath = [
    'Bathrooms',
    '1',
    '2',
    '3',
    '4'
  ];
  render() {
    return (
      <div className="search-panel">
        <form className="form-inline" role="form">
          <div className="form-group">
            <input type="text" className="form-control" id="city" placeholder="City" />
          </div>
          
          <SelectComponent listItem={this.listBed}>Bedrooms</SelectComponent>

          <SelectComponent listItem={this.listBath}>Bathrooms</SelectComponent>
          <div className="form-group hidden-xs adv">
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input className="form-control price" type="text" placeholder="From" />
            </div>
          </div>
          <div className="form-group hidden-xs adv">
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input className="form-control price" type="text" placeholder="To" />
            </div>
          </div>
          <div className="form-group hidden-xs adv">
            <div className="checkbox custom-checkbox">
              <label>
                <input type="checkbox" />
                <span className="fa fa-check" /> For Rent</label>
            </div>
          </div>
          <div className="form-group hidden-xs adv">
            <div className="checkbox custom-checkbox"><label>
              <input type="checkbox" /><span className="fa fa-check" /> For Sale </label>
            </div>
          </div>
          <div className="form-group">
            <a href="explore.html" className="btn btn-green isThemeBtn">Search</a>
            <a href="#" className="btn btn-o btn-white pull-right visible-xs" id="advanced">Advanced Search
        <span className="fa fa-angle-up" /></a>
          </div>
        </form>
      </div>
    );
  }
}

export default SelectBar;