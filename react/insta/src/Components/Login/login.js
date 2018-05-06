import React from "react";
import "../../App.css";

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
  constructor(props) {
    super(props);
    this.state = { email: '', pass:'' };
  }
  
  handleChange(event) {
    this.setState({email: event.target.value});
  }
  
  handlePass(event) {
    this.setState({pass: event.target.value});
  }


  handleSubmit(event) {
    console.log('Username: ' + this.state.email);
    console.log('Password: ' + this.state.pass);
    event.preventDefault();
  }
  
  render() { 
    return <div>
    <div className="general-body login">
      <h1>Instagram</h1>
      <TxtField label="User Name or Email or Mobile Number" type="text"
        value={this.state.value}
        onChange={this.handleChange} />
      <input type="text" value={this.state.email} onChange={this.handleChange.bind(this)} />
      <input type="password" value={this.state.pass} onChange={this.handlePass.bind(this)} />
      <TxtField label="Password" />
      <BlueButton label="Log in" />
      <input type="submit" onClick={this.handleSubmit.bind(this)} value="Submit" />
      <p className="or">OR</p>
      <BlueButton label="Log in with Facebook" />
    </div>
    <div className="general-body login">Don't have an account? Sign up</div>
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