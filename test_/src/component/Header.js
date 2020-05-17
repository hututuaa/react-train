import React from 'react';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'
import './header.css'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menu: [
  //       { name: 'Popular' },
  //       { name: 'Battle' },
  //     ],
  //     menuIndex: 0,
  //   };
  // }

  // clickIndex(name) {
  //   if (name === 'Popular') {
  //     this.setState({
  //       menuIndex: 0,
  //     });
  //   } else {
  //     this.setState({
  //       menuIndex: 1,
  //     });
  //   }
  // }

  render() {
    // const { menu, menuIndex } = this.state;

    return (
      // <Router>
        <header style={{
          width: '200px', display: 'flex', justifyContent: 'space-around', position: 'relative', left: '100px', top: '50px', fontSize: '24px',
        }}
        >
          <NavLink to= '/popular' activeClassName="active">Popular</NavLink>
          <NavLink to= '/battle' activeClassName="active">Battle</NavLink>
          {/* 
          {
            menu.map((item, index)=>(<span className={`header-item ${index===menuIndex ? 'headerActive' : null}`} key={item.name} role="button" onClick={() => {this.props.toggleMenu(item.name);this.clickIndex(item.name)}} >{item.name}</span>))
          } */}
        </header>
      // </Router>
    );
  }
}

export default Header