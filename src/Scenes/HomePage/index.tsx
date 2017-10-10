import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../Components/Header';
// import Header2 from '../../Components/Header2';
import Footer from '../../Components/Footer';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper">
          <Header />
        </div>
        {/* <div className="headerWrapper2">
          <Header2 />
        </div> */}
        <div className="bodyWrapper container">
          {}
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;