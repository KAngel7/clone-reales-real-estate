import * as React from 'react';
import './style.css';
import GoogleMapReact from 'google-map-react';
import MiniHouse from './Components/MiniHouse';

class SearchMap extends React.Component<{}, {}> {
  defaultProps = {
    center: {lat: 10.766748, lng: 106.705785},
    zoom: 15
  };
  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          defaultCenter={this.defaultProps.center}
          defaultZoom={this.defaultProps.zoom}
        >
          <MiniHouse lat={10.766748} lng={106.705785} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;