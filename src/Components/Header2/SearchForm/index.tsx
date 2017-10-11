import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

class SearchForm extends React.Component<{}, {}> {
  render() {
    return (
      <div className="search">
        <Icon className="searchIcon icon-magnifier" name="search" />
        <input type="text" placeholder="Search for houses, apartments..." />
      </div>
    );
  }
}

export default SearchForm;