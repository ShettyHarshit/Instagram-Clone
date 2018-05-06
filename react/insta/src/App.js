import React, { Component } from 'react';
import InstaHeader from "./Components/header";
import Profile from "./Components/users";
import _ from 'lodash';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './Components/Login/login';

// fetch("http://localhost:3000")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.x = {};
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
   fetchData = (url ="http://localhost:3001/api/posts") => {
  this.setState({loading: true})
  return fetch(url, {
    method: "get",
    headers: new Headers({
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjQ2NzE3MTZ9.5V4MLAkUKs9mCKYyS9DjVmNpd9Yk9BA7iCFS13R4y9o"
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.x = res;
      this.setState({ loading: false });
      console.log("Tera Nahi Kata");
      return res;
    })
    .catch(err => {
      this.setState({ loading: false });
      console.log("Tera Kat Gaya");
    });
}

render() {
  var postList = _.map(this.x, (function (post) {
    return <div className="post-body">
    <div className="post-user-info">
    <div className="w10">
    <img className="post-user-avatar" src="https://instagram.fmaa1-2.fna.fbcdn.net/vp/106ef4c34875eae25833b59bc9754614/5B360E03/t51.2885-19/s150x150/29402975_2106004819686825_2009629057657864192_n.jpg" alt="User" />
    </div>
    <div className="w90">
    <div className="post-user-name">theharshitshetty </div>
    <div className="post-user-name">{post.location} </div>
    </div>
    </div>
    <div className="post-wrap">
    <img src={post.url} alt={post.description} />
    <h1 className="post-likes" key={post.id}>
    {post.likes} Likes
    </h1>
    <p className="post-title">
    <span className="post-user">theharshitshetty </span>
    {post.description}
    </p>
    </div>
    </div>;
  }))
  return this.state.loading
  ? <center>Loading</center>
  : (
    <div>
    <div>{postList}</div>
    {/* {JSON.stringify(this.x)} */}
    </div>)
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <InstaHeader />
      <Router>
      <div>
      <Link to="/">Posts</Link>
      <Link to="/users">Users</Link>
      <Link to="/lg">Login</Link>
      <Route exact path="/" component={Post}/>
      <Route path="/users" component={Profile}/>
      <Route path="/lg" component={Login}/>
      </div>
      </Router>
    </div>
  );
}
}

export default App;
