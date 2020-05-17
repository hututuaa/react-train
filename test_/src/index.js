import React from 'react';
import ReactDOM from 'react-dom';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import Header from './component/Header.js';
import './styles/index.less';
import RouterComponent from './router.js'
import { BrowserRouter as Router } from 'react-router-dom'



class Combination extends React.Component {
   render() {
    return (

      <React.Fragment>
        <Router>
          <Header />
          <RouterComponent />
        </Router>
      </React.Fragment>

    );
  }
}


ReactDOM.render(
  <Combination />,
  document.getElementById('app'),
);
