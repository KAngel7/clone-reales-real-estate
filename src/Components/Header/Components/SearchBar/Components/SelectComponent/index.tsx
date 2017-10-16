import * as React from 'react';
import './style.css';

interface SelectComponentProps {
  listItem: string[];
}

interface SelectComponentState {
  showList: boolean;
  itemSelected: number;
}

class SelectComponent extends React.Component<SelectComponentProps, SelectComponentState> {
  wrapperRef: HTMLDivElement | null;
  constructor(props: SelectComponentProps) {
    super(props);
    this.state = {
      showList: false,
      itemSelected: 0
    };
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = (e: MouseEvent) => {
    if (
      this.wrapperRef && 
      !this.wrapperRef.contains(e.target as Node) &&
      this.state.showList
    ) {
      this.showToggle();
    }
  }
  showToggle = () => {
    if (this.state.showList) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    } else {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
    this.setState({
      showList: !this.state.showList
    });
  }

  doSelect = (index: number) => {
    this.setState({
      itemSelected: index
    });
    this.showToggle();
  }

  render() {
    return (
      <div className="selectComponent" ref={(div) => {this.wrapperRef = div; }}>
          <a href="#!" data-toggle="dropdown" className="btn btn-white dropdown-toggle" onClick={this.showToggle}>
            <span className="dropdown-label">{this.props.listItem[this.state.itemSelected]}</span> 
            <span className="caret" />
          </a>
          <ul  className={`dropdown-menu dropdown-select${this.state.showList ? ' active' : ''}`}>
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