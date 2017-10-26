import * as React from 'react';
import './style.css';
import MenuBar from './Components/MenuBar';
import SlideShow from './Components/SlideShow';
import SearchBar from './Components/SearchBar';
import Caption from './Components/Caption';

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
        <Caption />
        <div className="selectBarWrapper">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Header;