import React from 'react';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'
import './index.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: 'All' },
        { name: 'JavaScript' },
        { name: 'Ruby' },
        { name: 'Java' },
        { name: 'CSS' },
        { name: 'Python' },
      ],
      currentIndex: 0,

    };
  }

  clickIndex = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { tabs } = this.state;

    return (
      <nav className="nav">
        {
          tabs.map((item, index) => (
            <div
              className={`nav-item ${index === this.state.currentIndex ? 'nav-active' : null}`}
              key={item.name}
              onClick={() => { this.props.handleClick(item.name); this.clickIndex(index) }}
            >
              {item.name}
            </div>
          )
          )
        }

      </nav>
    );
  }
}

export default Header