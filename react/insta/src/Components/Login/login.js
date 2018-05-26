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
    const body = "{\"email\":\""+ this.state.email +"\",\"password\":\""+ this.state.pass +"\"}"
    console.log('Username: ' + this.state.email);
    console.log('Password: ' + this.state.pass);
    fetch("http://localhost:3001/authenticate", { body: body, headers: { "Content-Type": "application/json" }, method: "POST" })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.auth_token);
        sessionStorage.setItem('InstaAUTHTOKEN', responseJson.auth_token);
        window.location.reload(false); 
      })


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
      <input type="text" value={this.state.pass} onChange={this.handlePass.bind(this)} />
      <input type="submit" onClick={this.handleSubmit.bind(this)} value="Submit" />
      <TxtField label="Password" />
      <BlueButton label="Log in" />
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