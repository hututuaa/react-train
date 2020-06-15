import React from "react";
// import 'react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css'
import styles from "./index.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: "All" },
        { name: "JavaScript" },
        { name: "Ruby" },
        { name: "Java" },
        { name: "CSS" },
        { name: "Python" },
      ],
      currentIndex: 0,
    };
  }
  componentDidMount() {
    const oldIndex = window.localStorage.getItem("currentIndex");
    if (oldIndex) {
      this.setState({
        currentIndex: JSON.parse(oldIndex),
      });
    } else {
      this.setState({
        currentIndex: 0,
      });
    }
  }

  clickIndex = (index) => {
    window.localStorage.currentIndex = index;
    const currentIndex = window.localStorage.currentIndex;
    this.setState({
      currentIndex: JSON.parse(currentIndex),
    });
  };

  render() {
    const { tabs, currentIndex } = this.state;
    return (
      <nav className={styles.navContent}>
        {tabs.map((item, index) => (
          <div
            className={`${index === currentIndex ? styles.navActive : null}`}
            id={styles.navItem}
            key={item.name}
            onClick={() => {
              this.props.handleClick(item.name);
              this.clickIndex(index);
            }}
          >
            {item.name}
          </div>
        ))}
      </nav>
    );
  }
}

export default Nav;
