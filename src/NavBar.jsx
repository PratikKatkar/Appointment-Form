import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        style={{ position: "fixed", top: "0px", width: "100%" }}
        className="navbar navbar-default"
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <h2 style={{ marginLeft: "120rem" }}>Pratik Katkar</h2>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
