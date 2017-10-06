import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../Scenes/HomePage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <span>Admin</span>
          <Route exact={true} path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
