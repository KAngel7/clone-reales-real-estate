import * as React from 'react';
import './style.css';

import SelectComponent from '../../../Components/SelectComponent';

class MyInfoForm extends React.Component<{}, {}> {
  yearOfBirth = [
    'Select',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010'
  ];
  propertyType = [
    'Property Type',
    'House',
    'Apartment',
    'Unit'
  ];
  bedProperty = [
    'Beds',
    'Studio',
    '1 Bed',
    '2 Beds'
  ];
  ownOrRent = [
    'Own or Rent',
    'Owner',
    'Investor'
  ];
  render() {
    return (
      <div className="myInfoForm container">
        <div className="row">
          <div className="myInfoHeader">
            <div className="form-group">
              <h3>Your details</h3>
            </div>
            <div className="form-group">
              <h5>We'd love to find out more about you. It'll help us make
                sure our website and apps tick the right boxes.</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <h4>Your name</h4>
          </div>
          <div className="form-group">
            <div className="first-name col-xs-12 col-sm-6 col-md-3 form-group">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="last-name col-xs-12 col-sm-6 col-md-3 form-group">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3 col-md-2 yearOfBirth">
            <div className="form-group">
              <h4>Year of birth</h4>
            </div>
            <div className="form-group selectItem">
              <SelectComponent listItem={this.yearOfBirth} />
            </div>
          </div>

          <div className="col-xs-6 col-sm-3 col-md-2 gender">
            <div className="form-group">
              <h4>Gender</h4>
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group col-xs-8 col-sm-6 col-md-6 radioGender">
                  <label><input type="radio" name="gender" id="" />Male</label>
                </div>
                <div className="form-group col-xs-8 col-sm-6 col-md-6 radioGender">
                  <label><input type="radio" name="gender" id="" />Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <h4>Your street address</h4>
          </div>
          <div className="form-group">
            <div className="col-xs-12 col-sm-12 col-md-6 form-group">
              <input type="text" name="" id="" className="form-control" placeholder="Address" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 form-group">
              <SelectComponent listItem={this.propertyType} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 form-group">
              <SelectComponent listItem={this.bedProperty} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 form-group">
              <SelectComponent listItem={this.ownOrRent} />
            </div>
          </div>
        </div>
        <div className="row btnRow">
          <div className="form-group">
            <input type="button" className="btn btn-danger btn-lg" value="Save profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfoForm;