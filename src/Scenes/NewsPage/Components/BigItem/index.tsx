import * as React from 'react';
import './style.css';

interface BigItemProps {
  linkImage: string;
}

class BigItem extends React.Component<BigItemProps, {}> {
  constructor(props: BigItemProps) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="bigItemContainer">
        <img 
          src={this.props.linkImage}
        />
      </div>
    );
  }
}

export default BigItem;