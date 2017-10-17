import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../Scenes/HomePage';
import WalletPage from '../../Scenes/WalletPage';
import PageInfo from '../../Scenes/MyInfoPage';
import SearchPage from '../../Scenes/SearchPage';
import MyhousePage from '../../Scenes/MyhousePage';
import NewPropertyPage from '../../Scenes/NewPropertyPage';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/wallet/:action?" component={WalletPage} />
          <Route exact={true} path="/search/:action?" component={SearchPage} />
          <Route exact={true} path="/myhouse" component={MyhousePage} />
          <Route exact={true} path="/newproperty" component={NewPropertyPage} />
          <Route exact={true} path="/myprofile" component={PageInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
