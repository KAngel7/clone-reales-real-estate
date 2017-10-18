import * as React from 'react';
import './style.css';

import SelectComponent from 'Components/SelectComponent';

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
      <div className="myInfoForm">
        <div className="row form-group">
          <div className="first-name form-group col-xs-12 col-sm-6 col-md-6">
            <h4>Your name</h4>
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="last-name form-group col-xs-12 col-sm-6 col-md-6">
            <h4 className="hidden-xs invisible">Your last name</h4>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-xs-6 col-sm-6 col-md-6 yearOfBirth">
            <h4>Year of birth</h4>
            <div className="selectItem">
              <SelectComponent listItem={this.yearOfBirth} />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 gender">
            <h4>Gender</h4>
            <div className="radioGender">
              <label><input type="radio" name="gender" />Male</label>
            </div>
            <div className="radioGender">
              <label><input type="radio" name="gender" />Female</label>
            </div>
          </div>
        </div>
        <div className="row form-group">

          <div className="form-group col-sm-12 col-md-6">
            <h4>Your street address</h4>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-2">
            <h4 className="hidden-xs hidden-sm invisible">Property Type</h4>
            <SelectComponent listItem={this.propertyType} />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-2">
            <h4 className="hidden-xs hidden-sm invisible">Beds</h4>
            <SelectComponent listItem={this.bedProperty} />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-2">
            <h4 className="hidden-xs hidden-sm invisible">Own Or Rent</h4>
            <SelectComponent listItem={this.ownOrRent} />
          </div>
        </div>
        <div className="row btnRow">
          <div className="form-group">
            <input type="button" className="btn btn-green btn-lg" value="Save profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfoForm;