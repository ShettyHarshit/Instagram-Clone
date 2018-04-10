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
  }

  render() {
    return <div className="general-body">
        My Profile
        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <p>x followers y following z posts</p>
      </div>;
  }
}

export default Profile;