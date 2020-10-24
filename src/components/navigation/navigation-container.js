import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  // const dynamicLink = (route, linkText) => {
  //   return (
  //     <div className="nav-link-wrapper">
  //       <NavLink exact to={route} activeClassName="nav-link-active">
  //         {linkText}
  //       </NavLink>
  //     </div>
  //   );
  // };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div>Logo Goes Here</div>
      </div>

      <div className="right-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/dashboard" activeClassName="nav-link-active">
            My Dashboard
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink exact to="/logout" activeClassName="nav-link-active">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
