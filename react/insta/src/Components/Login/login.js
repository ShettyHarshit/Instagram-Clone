import React from "react";
import "../../App.css";

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

  warn(){
    alert("It's just a clone lmao chill")
  }
  
  render() { 
    return <div>
    <div className="general-body login">
      <h1>Instagram</h1>
        <div><input placeholder="User Name or Email" className="txt" type="text" value={this.state.email} onChange={this.handleChange.bind(this)} /></div>
        <div><input placeholder="Password" className="txt" type="text" value={this.state.pass} onChange={this.handlePass.bind(this)} /></div>     
        <input className="blue-button" type="submit" onClick={this.handleSubmit.bind(this)} value="Log In" />
      <p className="or">OR</p>
          <button className="blue-button" onClick={this.warn.bind(this)}>Log In With Facebook</button>
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