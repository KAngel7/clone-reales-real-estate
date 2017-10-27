import * as React from 'react';
import './style.css';

interface NewItemProps {
  data: {
    linkImage: string;
    title: string;
    address: string;
    date: string;
    content: string;
  };
}

class NewItem extends React.Component<NewItemProps, {}> {
  constructor(props: NewItemProps) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="newItemContainer ">
        <div className="itemImage">
          <img src={this.props.data.linkImage} />
        </div>
        <div className="itemInfo">
          <div className="itemTitle">
            <h3>{this.props.data.title}</h3>
          </div>
          <div className="itemDetail">
            <div className="itemAddress">
              <p><strong>{this.props.data.address}</strong></p>
            </div>
            <div className="itemDate">
              <p><strong>{this.props.data.date}</strong></p>
            </div>
          </div>
          <div className="itemContent">
            {this.props.data.content}
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;