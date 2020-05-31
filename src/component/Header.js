import React from "react";
import { NavLink } from "react-router-dom";
import "react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import styles from "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          left: "100px",
          top: "50px",
          fontSize: "24px",
        }}
      >
        <NavLink to="/popular" activeClassName={styles.active}>
          Popular
        </NavLink>
        <NavLink to="/battle" activeClassName={styles.active}>
          Battle
        </NavLink>
      </header>
    );
  }
}

export default Header;
