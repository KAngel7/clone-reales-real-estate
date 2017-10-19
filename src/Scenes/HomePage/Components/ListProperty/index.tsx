import * as React from 'react';
import './style.css';
import SingelHouse from 'Components/SingleHouse';
const houseData: any[] = [{
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}];

class ListProperty extends React.Component<{}, {}> {
  render() {
    return (
      <div className="listProperty">
        <div className="row listPropertyHeader">
          <h3>Recently Listed Properties</h3>
          <h5>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</h5>
        </div>
        <div className="row listPropertyContent">
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProperty;