import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import SelectComponent from './Components/SelectComponent';

interface SearchBarProps {

}

interface SelectBarState {
  isAdvance: boolean;
}

class SearchBar extends React.Component<SearchBarProps, SelectBarState> {
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

  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      isAdvance: false
    };
  }

  toggleAdvSearch = () => {
    this.setState({
      isAdvance: !this.state.isAdvance
    });
  }
  render() {
    return (
      <div className="search-panel">
        <form className="form-inline" role="form">
          <div className="form-group">
            <input type="text" className="form-control" id="city" placeholder="City" />
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <SelectComponent listItem={this.listBed}>Bedrooms</SelectComponent>
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <SelectComponent listItem={this.listBath}>Bathrooms</SelectComponent>
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input className="form-control price" type="text" placeholder="From" />
            </div>
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input className="form-control price" type="text" placeholder="To" />
            </div>
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="checkbox custom-checkbox">
              <label>
                <input type="checkbox" />
                <Icon name="check" /> For Rent</label>
            </div>
          </div>
          <div className={`form-group adv${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="checkbox custom-checkbox"><label>
              <input type="checkbox" /><Icon name="check" /> For Sale </label>
            </div>
          </div>
          <div className="form-group">
            <a href="/search" className="btn btn-green isThemeBtn">Search</a>
            <a
              href="#" 
              className={`btn btn-o btn-white pull-right visible-xs${this.state.isAdvance ? ' advBtnActive' : ''}`}
              onClick={this.toggleAdvSearch}
            >
              Advanced Search
              <Icon name={`${this.state.isAdvance ? 'angle-down' : 'angle-up'}`} />
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;