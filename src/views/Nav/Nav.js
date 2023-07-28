import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="tabs">
          {/* <Link className="tab-item active " to="/"></Link> */}
          <NavLink
            to="/"
            className="tab-item"
            activeClassName="active"
            exact={true}
          >
            Home
          </NavLink>
          <NavLink to="/todo" className="tab-item" activeClassName="active">
            Todo
          </NavLink>
          {/* <NavLink to="/about" className="tab-item" activeClassName="active">
            About
          </NavLink> */}
          <NavLink to="/user" className="tab-item" activeClassName="active">
            User
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
