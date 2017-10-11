import * as React from 'react';
import './style.css';
import MenuBar from './Components/MenuBar';
import SlideShow from './Components/SlideShow';
import QuickSearch from './Components/QuickSearch';
import SelectBar from './Components/SelectBar';

class Header extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header">
        <div className="slideShowBarWrapper">
          <SlideShow />
        </div>
        <div className="menuBarWrapper">
          <MenuBar />
        </div>
        <div className="homeCaption">
          <div className="homeTitle">Now it's easy to find your future home</div>
          <div className="homeSubtitle">With Reales - Real Estate HTML Template</div>
          <a href="#" className="btn btn-black">Learn More</a>
        </div>
        <div className="quickSearchWrapper">
          <QuickSearch />
        </div>
        <div className="selectBarWrapper">
          <SelectBar />
        </div>
      </div>
    );
  }
}

export default Header;