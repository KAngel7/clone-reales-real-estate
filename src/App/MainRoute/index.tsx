import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getUserToken } from 'Services/Api/Token';
import { SupportedLanguage } from 'Services/Geo';
import { connect, Dispatch } from 'react-redux';
import { RootState } from 'Redux/Store';
import { authenticate } from 'Redux/Modules/User';
import HomePage from 'Scenes/HomePage';
import WalletPage from 'Scenes/WalletPage';
import PageInfo from 'Scenes/MyInfoPage';
import SearchPage from 'Scenes/SearchPage';
import MyhousePage from 'Scenes/MyhousePage';
import NewPropertyPage from 'Scenes/NewPropertyPage';
import AgentPage from 'Scenes/AgentPage';
import AdvicePage from 'Scenes/AdvicePage';
import NewsPage from 'Scenes/NewsPage';

const mapStateToProps = (state: RootState) => ({
  lang: state.status.lang
});
const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  authUser: () => {
    dispatch(authenticate());
  }
});

interface AppProps {
  authUser: () => void;
  lang: SupportedLanguage;
}

class App extends React.Component<AppProps, {}> {
  componentDidMount() {
    const userToken = getUserToken();
    if (userToken) {
      this.props.authUser();
    }
  }
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/wallet/:action?" component={WalletPage} />
          <Route exact={true} path="/search/:action?" component={SearchPage} />
          <Route exact={true} path="/property/:id?" component={MyhousePage} />
          <Route exact={true} path="/newproperty/:action" component={NewPropertyPage} />
          <Route exact={true} path="/myprofile" component={PageInfo} />
          <Route exact={true} path="/advice/:type" component={AdvicePage} />
          <Route exact={true} path="/agent/:action" component={AgentPage} />
          <Route exact={true} path="/projects" component={NewsPage} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
