import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../Scenes/HomePage';

import SearchPage from '../../Scenes/SearchPage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/search" component={SearchPage} />
        </div>
      </Router>
    );
  }
}

export default App;
