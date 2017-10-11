import * as React from 'react';
import './style.css';

interface RegisterFormProps {
  active: boolean;
  openLoginForm: () => void;
}

interface RegisterFormState {

}

class RegisterForm extends React.Component<RegisterFormProps, RegisterFormState> {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div
        className={'registerForm modal fade' + (this.props.active ? ' in' : '')}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sign In</h4>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <input type="text" placeholder="First Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Email Address" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Confirm Password" className="form-control" />
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <a href="explore.html" className="btn btn-lg btn-green isThemeBtn btn-red">Sign Up</a>
                  </div>
                </div>
                <p className="help-block">
                  Already a Reales member?
                  <a
                    href="#"
                    className="modal-su text-green isThemeText text-red"
                    onClick={this.props.openLoginForm}
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;