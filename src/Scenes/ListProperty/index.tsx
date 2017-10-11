import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header2 from '../../Components/Header2';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper2">
          <Header2 />
        </div>
        <div className="bodyWrapper container">
          {}
        </div>
      </div>
    );
  }
}

export default HomePage;