import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="tabs">
          <a href="/home" className="tab-item active ">
            Home
          </a>
          <a href="/todo" className="tab-item">
            Todo
          </a>
          <a href="/about" className="tab-item">
            About
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
