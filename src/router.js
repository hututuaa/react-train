import Popular from "@/pages/Popular/index.js";
// import Battle from '@/pages/Battle/index.js';
import React from "react";
import Result from "@/pages/Battle/result";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import asyncComponent from "./lazy";
const Battle = asyncComponent(() => import("@/pages/Battle/index.js")); //这里是懒加载的写法
class RouterComponent extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Redirect to = "/popular"/> */}
        <Route path="/popular" exact component={Popular} />
        <Route path="/battle" exact component={Battle} />
        <Route
          path="/battle/result/:leftValue/:rightValue"
          component={Result}
        />
        <Redirect to="/popular" />
      </Switch>
    );
  }
}

export default withRouter(RouterComponent);
