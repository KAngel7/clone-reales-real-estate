import * as React from 'react';
import './style.css';
import SelectComponent from 'Components/SelectComponent';
import SingelHouse from 'Components/SingleHouse';
import SearchMap from '../SearchMap';
import { Icon } from 'react-fa';

const houseData: any[] = [{
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}];

interface SearchFormState {
  resultTab: 'list' | 'map';
}

class SearchForm extends React.Component<{}, SearchFormState> {
  constructor() {
    super();
    this.state = {
      resultTab: 'list'
    };
  }
  changeResultTab = (tab: 'list' | 'map') => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab
      });
    }
  }
  resultList = () => {
    return (
      <div className="resultsList">
        <div className="row">
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  resultMap = () => {
    return (
      <div className="resultsMap">
        <SearchMap />
      </div>
    );
  }
  render() {
    return (
      <div className="searchForm">
        <div className="filterBox">
          <div className="row form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 yearOfBirth">
              <h4>Prototype Type</h4>
              <div className="selectItem">
                <SelectComponent listItem={['All', 'Rent', 'Sale']} />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bedrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left">
                    <Icon name="angle-left" />
                  </a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right">
                    <Icon name="angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bathrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left"><Icon name="angle-left" /></a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right"><Icon name="angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resultTable">
          <div className="resultTab">
            <ul>
              <li 
                className={this.state.resultTab === 'list' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('list')}
              >
                <a><Icon name="th-list" /> Listing view</a>
              </li>
              <li
                className={this.state.resultTab === 'map' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('map')}
              >
                <a><Icon name="map-o" /> Map view</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            {this.state.resultTab === 'list' ? this.resultList() : this.resultMap()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;