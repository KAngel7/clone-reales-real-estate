import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header2 from '../../Components/Header2';
import MyWallet from './Components/MyWallet';
import SmallActive from '../../Components/LeftSide/Components/SmallActive';
import ExpandActive from '../../Components/LeftSide/Components/ExpandActive';

interface SearchPageState {
  isExpand: boolean;
}

class SearchPage extends React.Component<RouteComponentProps<any>, SearchPageState> {
  constructor() {
    super();
    this.state = {
      isExpand: false
    };
  }
  doToggle = () => {
    this.setState({
      isExpand: !this.state.isExpand
    });
  }
  render() {
    return (
      <div className="searchPage">
        <div className="headerWrapper">
          <Header2 clickToggle={this.doToggle} />
        </div>
        <div className="bodyWrapper">
          <div id="leftSide" className={`${this.state.isExpand ? 'expanded' : ''}`}>
            {this.state.isExpand ? <ExpandActive /> : <SmallActive />}
          </div>
          <div className="walletWrapper">
            <MyWallet />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;