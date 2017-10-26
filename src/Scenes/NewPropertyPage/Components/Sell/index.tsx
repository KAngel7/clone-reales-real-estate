import * as React from 'react';
import './style.css';
import AddNewPropertyForm from '../AddNewPropertyForm';

class SellPropertyPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="sellPropertyPage">
        <div className="dashboardTitle">
          <h3>Sell Property</h3>
          <h5>We'd love to find out more about you. It'll help us make
                sure our website and apps tick the right boxes.</h5>
        </div>
        <div className="dashboardBody">
          <AddNewPropertyForm />
        </div>
      </div>
    );
  }
}

export default SellPropertyPage;