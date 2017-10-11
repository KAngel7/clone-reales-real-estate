import * as React from 'react';
import './style.css';

interface RegisterFormProps {
  type: string;
}

class SocialButtons extends React.Component<RegisterFormProps, {}> {
  render() {
    return (
      <div className="socialButtons">
        <div className="or"><span>or</span></div>
        <button type="button" className="socialButton buttonFacebook">
          {this.props.type} with Facebook
        </button>
        <button type="button" className="socialButton buttonGoogle">
          {this.props.type} with Google
        </button>
      </div>
    );
  }
}

export default SocialButtons;