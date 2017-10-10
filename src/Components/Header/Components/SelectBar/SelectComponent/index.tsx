import * as React from 'react';
import './style.css';

interface SelectComponentProps {
  listItem: string[];
}

interface SelectComponentState {
  showList: boolean;
  itemSelected: string;
}

class SelectComponent extends React.Component<SelectComponentProps, SelectComponentState> {
  constructor(props: SelectComponentProps) {
    super(props);
    this.state = {
      showList: false,
      itemSelected: 'Bedrooms'
    };
  }

  showToggle = () => {
    this.setState({
      showList: !this.state.showList
    });
    document.addEventListener('click', this.hide);
  }

  hide = () => {
    this.setState({
      showList: false
    });
    document.removeEventListener('click', this.hide);
  }

  doSelect = (ind: number) => {
    this.setState({
      itemSelected: this.props.listItem[ind]
    });
  }

  render() {
    return (
      <div className="selectComponent form-group">
          <a href="#!" data-toggle="dropdown" className="btn btn-white dropdown-toggle" onClick={this.showToggle}>
            <span className="dropdown-label">{this.state.itemSelected}</span> <span className="caret" />
          </a>
          <ul  className={`dropdown-menu dropdown-select ${this.state.showList ? 'active' : ''}`}>
            {this.props.listItem.map((item, index) => {
                return (
                  <li key={index} onClick={e => { this.doSelect(index); }}>
                    <a href="#!">{item}</a>
                  </li>
                );
            })}
          </ul>
        </div>
    );
  }
}

export default SelectComponent;