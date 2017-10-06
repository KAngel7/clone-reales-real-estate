import * as React from 'react';
import './style.css';

class QuickSearch extends React.Component<{}, {}> {
  render() {
    return (
      <div className="quickSearch">
        <form className="quickSearchForm">
          <input
            name="where"
            className="searchInput"
            autoComplete="off"
            placeholder="Search"
          />
          <button className="btn btn-green">
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default QuickSearch;