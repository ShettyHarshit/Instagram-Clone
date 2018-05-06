import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import "../App.css";
 

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: 0, bio: "", username: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/users/me", {
      method: "get",
      headers: new Headers({
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjM0NjU2ODd9.kyEfSNhNXkWF96oTc_rNAgXRl_ggtxFvQNhBtzmW2X0"
      })
    }).then(response => response.json())
      .then(data => console.log(data));
      // .then(data => this.setState({ bio: data.bio, username: data.username, posts: data.posts}));
  }

  render() {
    return <div className="general-body">
    <center>
        <h1>{this.state.username}</h1>
        <h2>{this.state.bio}</h2>
        <Avatar size="large" src="https://instagram.fmaa1-2.fna.fbcdn.net/vp/106ef4c34875eae25833b59bc9754614/5B360E03/t51.2885-19/s150x150/29402975_2106004819686825_2009629057657864192_n.jpg" />
        <p>
          {this.state.posts} followers {this.state.posts} following {this.state.posts} posts
        </p>
        </center>
      </div>;
  }
}

export default Profile;