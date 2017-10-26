import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import SelectComponent from 'Components/SelectComponent';
import CheckBox from 'Components/CheckBox';
import InputMap from '../../../../Components/InputMap';
import RadioButton from '../RadioButton';

class AddNewPropertyForm extends React.Component<{}, {}> {
  types = [
    'For Sale',
    'For Rent'
  ];
  render() {
    return (
      <div className="newPropertyForm">
        <div className="row form-group">
          <div className="title col-xs-12 col-sm-6 col-md-6">
            <h4>Title</h4>
            <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="Price col-xs-12 col-sm-6 col-md-6">
            <h4>Price</h4>
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row form-group">
          <div className="discription col-xs-12 col-sm-12 col-md-12">
            <h4>Description</h4>
            <textarea className="description form-control" />
          </div>
        </div>
        <div className="row form-group">
          <div className="address col-xs-12 col-sm-12 col-md-12">
            <h4>Address</h4>
            <InputMap />
          </div>
        </div>
        <div className="row form-group">
          <div className="bedrooms col-xs-12 col-sm-6 col-md-3">
            <h4>Bedrooms</h4>
            <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="bathrooms col-xs-12 col-sm-6 col-md-3">
            <h4>Bathrooms</h4>
            <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="area col-xs-12 col-sm-6 col-md-3">
            <h4>Area</h4>
            <div className="input-group">
              <input type="text" name="" id="" className="form-control" />
              <span className="input-group-addon">Sq Ft</span>
            </div>
          </div>
          <div className="type col-xs-12 col-sm-6 col-md-3">
            <h4>Type</h4>
            <SelectComponent listItem={this.types} />
          </div>
        </div>
        <div className="row form-group">
          <div className="imageGallery col-xs-12 col-sm-12 col-md-12">
            <h4>Image Gallery</h4>
            <div className="file-input file-input-new">
              <input type="hidden" value="" />
              <div className="file-preview">
                <div className="file-preview-status text-center text-success" />
                <div className="close fileinput-remove text-right">×</div>
                <div className="file-preview-thumbnails" />
                <div className="clearfix" />
              </div>
              <div className="btn btn-o btn-default btn-file">
                <Icon name="folder-open" />
                &nbsp;Browse Images
                <input type="file" className="file" multiple={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="row form-group">
          <div className="amenities col-xs-12 col-sm-12 col-md-12">
            <h4>Amenities</h4>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Garage</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Outdoor Pool</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Garden</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Security System</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Internet</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Telephone</CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Air Conditioning  </CheckBox>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <CheckBox>Heating</CheckBox>
            </div>
          </div>
        </div>
        <div className="row form-group">
          <div className="agent col-xs-12 col-sm-12 col-md-12">
            <h4>Agents</h4>
            <div className="agentItems col-xs-6 col-sm-6 col-md-6">
              <RadioButton>No Agent</RadioButton>
            </div>
            <div className="agentItems col-xs-6 col-sm-6 col-md-6">
              <RadioButton>Find Agent</RadioButton>
            </div>
          </div>
        </div>
        <div className="row form-group rowBtn">
          <input type="submit" className="btn btn-green btn-lg" defaultValue="Add Property" />
        </div>
      </div>
    );
  }
}

export default AddNewPropertyForm;