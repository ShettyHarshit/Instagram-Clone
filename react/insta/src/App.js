import React, { Component } from 'react';
import logo from './logo.png';
import insta from './insta-logo.png';
import _ from 'lodash';
import './App.css';

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

  fetchData = (url ="http://localhost:3000") => {
    this.setState({loading: true})
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        // this.x = res
        var t = _.get(res, "data")
        // var desc = _.map(t, function (o) {
        //   return o.description
        // })
        this.x = t
        this.setState({loading: false})
        console.log("Tera Nahi Kata")
        return t;
      }).catch(err => {
        this.setState({ loading: false })
        console.log("Tera Kat Gaya")
      })
  }

  render() {
    var postList = _.map(this.x, (function (post) {
      return <div className="post-body">
          <div className="post-user-info">
            <span className="post-user">theharshitshetty </span>
          </div>
          <div className="post-wrap">
            <img src={post.url} />
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

class InstaHeader extends Component {
  state = {}
  render() { 
    return <div className="insta-header">
    <img className="insta-logo" src={insta} />
    </div>;
  }
}
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <InstaHeader />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Namma Insta</h1>
        </header> */}
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Post />
      </div>
    );
  }
}

export default App;
