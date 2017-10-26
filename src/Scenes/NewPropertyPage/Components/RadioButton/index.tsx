import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';

class RadioButton extends React.Component<{}, {}> {
  render() {
    return (
      <div className="radio custom-radio">
        <label>
          <input type="radio" name="radio1" />
          <Icon name="circle" /> {this.props.children}
        </label>
      </div>
    );
  }
}

export default RadioButton;