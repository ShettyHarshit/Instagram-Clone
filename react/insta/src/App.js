import React, { Component } from 'react';
import logo from './logo.svg';
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
        var desc = _.map(t, function (o) {
          return o.description
        })
        this.x = t
        this.setState({loading: false})
        console.log("Tera Nahi Kata")
        console.log(desc)
        return t;
      }).catch(err => {
        this.setState({ loading: false })
        console.log("Tera Kat Gaya")
      })
  }

  render() {
    return this.state.loading
      ? <center>Loading</center>
      : (
        <div>
          <h1>Hello</h1>
          <h1>{JSON.stringify(this.x.description)}</h1>
        {JSON.stringify(this.x)}
        </div>)
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Namma Insta</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Post />
      </div>
    );
  }
}

export default App;
