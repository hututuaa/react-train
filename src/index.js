import React from "react";
import ReactDOM from "react-dom";
import "react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
// eslint-disable-next-line import/extensions
import Header from "./component/Header.js";
import "./styles/index.less";
// eslint-disable-next-line import/extensions
import RouterComponent from "./router.js";
// eslint-disable-next-line import/order
import { HashRouter as Router } from "react-router-dom";

class Combination extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <RouterComponent />
        </Router>
      </>
    );
  }
}

ReactDOM.render(<Combination />, document.getElementById("app"));
