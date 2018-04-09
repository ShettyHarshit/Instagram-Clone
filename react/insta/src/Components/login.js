import React from "react";
import "../App.css";

class BlueButton extends React.Component {
  render() { 
    return <button className="blue-button">
    {this.props.label}
    </button>
  }
}

class TxtField extends React.Component {
  state = {}
  render() { 
    return <input placeholder={this.props.label} className="txt">
    </input>
  }
}

class SignUp extends React.Component {
  state = {}
  render() { 
    return <div>
        <div className="general-body login">
          <h1>Instagram</h1>
          <BlueButton label="Log in with Facebook" />
          <p className="or">OR</p>
          <TxtField label="Mobile Number or Email" />
          <TxtField label="Full Name" />
          <TxtField label="User Name" />
          <TxtField label="Password" />
          <BlueButton label="Sign Up" />
          <div className="terms">
            By signing up, you agree to our Terms & Privacy Policy.
          </div>
        </div>
        <div className="general-body login">Have an account? Log in</div>
      </div>;
  }
}



class Login extends React.Component {
  state = {};
  render() {
    return <center>
    <SignUp />
    </center>;
  }
}

export default Login;