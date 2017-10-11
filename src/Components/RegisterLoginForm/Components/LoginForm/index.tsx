import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';

interface LoginFormProps {
  active: boolean;
  openRegisterForm: () => void;
}

interface LoginFormState {

}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div
        className={'loginForm modal slimScroll fade' + (this.props.active ? ' in' : '')}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sign In</h4>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <div className="btn-group-justified">
                    <a href="explore.html" className="btn btn-lg btn-facebook">
                      <Icon name="facebook" className="pull-left" />
                      <span>Sign In with Facebook</span>
                    </a>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <a href="explore.html" className="btn btn-lg btn-google">
                      <Icon name="google" className="pull-left" />
                      <span>Sign In with Google</span>
                  </a>
                  </div>
                </div>
                <div className="signOr">OR</div>
                <div className="form-group">
                  <input type="text" placeholder="Email Address" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="checkbox custom-checkbox">
                        <label>
                          <input type="checkbox" />
                          <Icon name="check" />
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-6 align-right">
                      <p className="help-block">
                        <a href="#" className="text-green isThemeText text-red">
                          Forgot password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <a href="explore.html" className="btn btn-lg btn-green isThemeBtn btn-red">
                      Sign In
                    </a>
                  </div>
                </div>
                <p className="help-block">
                  <span>Don't have an account? </span>
                  <a
                    href="#"
                    className="modal-su text-green isThemeText text-red"
                    onClick={this.props.openRegisterForm}
                  >
                    Sign Up
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

export default LoginForm;