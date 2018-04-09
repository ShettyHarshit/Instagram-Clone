import React from "react";
import insta from "../insta-logo.png";

class InstaHeader extends React.Component {
  state = {};
  render() {
    return (
      <div className="insta-header">
        <img className="insta-logo" src={insta} alt="Instagram Logo" />
      </div>
    );
  }
}
 
export default InstaHeader;