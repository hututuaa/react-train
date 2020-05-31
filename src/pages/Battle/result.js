import React from "react";
import styles from "./index.css";
import "font-awesome/css/font-awesome.min.css";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftResult: {},
      rightResult: {},
    };
  }

  async componentDidMount() {
    this.setState({
      leftResult: JSON.parse(this.props.location.query.playerOne),
      rightResult: JSON.parse(this.props.location.query.playerTwo),
    });
  }

  changeFlag = () => {
    this.props.history.go(-1);
  };

  render() {
    const { leftResult, rightResult } = this.state;
    return (
      <div className={styles.result}>
        <div className={styles.battleContent}>
          <div className={styles.contentLeft}>
            <div
              style={{
                display:
                  leftResult.public_repos >= 0 &&
                  leftResult.public_repos !== rightResult.public_repos
                    ? "block"
                    : "none",
                minHeight: "20px",
              }}
            >
              {leftResult.public_repos > rightResult.public_repos ? (
                <h1 style={{ textAlign: "center", fontWeight: "300" }}>
                  Winner
                </h1>
              ) : (
                <h1 style={{ textAlign: "center", fontWeight: "300" }}>
                  Loser
                </h1>
              )}
            </div>
            <div className={styles.imgOne}>
              <img
                alt="left-img"
                style={{ with: "150px", height: "150px" }}
                src={`https://github.com/${leftResult.login}.png?`}
              />
            </div>
            <h1
              style={{ textAlign: "center", color: "#1890ff", height: "30px" }}
            >
              {leftResult.login}
            </h1>
            <ul className={styles.desc}>
              <li>
                <i className={[styles.fa, styles.faUserO]} aria-hidden="true" />
                <a href="/popular">{leftResult.name}</a>
              </li>
              <li>
                <i
                  className={[styles.fa, styles.faCompass]}
                  aria-hidden="true"
                />
                <a href="/popular">{leftResult.location}</a>
              </li>
              <li>
                <i className={[styles.fa, styles.faUsers]} aria-hidden="true" />
                <a href="/popular">{leftResult.followers} followers</a>
              </li>
              <li>
                <i
                  className={[styles.fa, styles.faUserPlus]}
                  aria-hidden="true"
                />
                <a hrfe="/popular">{leftResult.following} following</a>
              </li>
              <li>
                <i className={[styles.fa, styles.faStar]} aria-hidden="true" />
                <a hrfe="/popular">{leftResult.public_repos} repositories</a>
              </li>
            </ul>
          </div>
          <div className={styles.contentRight}>
            <div
              style={{
                display:
                  rightResult.public_repos >= 0 &&
                  leftResult.public_repos !== rightResult.public_repos
                    ? "block"
                    : "none",
                minHeight: "20px",
              }}
            >
              {" "}
              {rightResult.public_repos > leftResult.public_repos ? (
                <h1 style={{ textAlign: "center", fontWeight: "300" }}>
                  Winner
                </h1>
              ) : (
                <h1 style={{ textAlign: "center", fontWeight: "300" }}>
                  Loser
                </h1>
              )}{" "}
            </div>
            <div className={styles.imgTwo}>
              <img
                alt="right-img"
                style={{ with: "150px", height: "150px" }}
                src={`https://github.com/${rightResult.login}.png?`}
              />
            </div>
            <h1
              style={{ textAlign: "center", color: "#1890ff", height: "30px" }}
            >
              {rightResult.login}
            </h1>
            <ul className={styles.desc}>
              <li>
                <i className={[styles.fa, styles.faUserO]} aria-hidden="true" />
                <a href="/popular">{rightResult.name}</a>
              </li>
              <li>
                <i
                  className={[styles.fa, styles.faCompass]}
                  aria-hidden="true"
                />
                <a href="/popular">{rightResult.location}</a>
              </li>
              <li>
                <i className={[styles.fa, styles.faUsers]} aria-hidden="true" />
                <a href="/popular">{rightResult.followers} followers</a>
              </li>
              <li>
                <i
                  className={[styles.fa, styles.faUserPlus]}
                  aria-hidden="true"
                />
                <a hrfe="/popular">{rightResult.following} following</a>
              </li>
              <li>
                <i className={[styles.fa, styles.faStar]} aria-hidden="true" />
                <a hrfe="/popular">{rightResult.public_repos} repositories</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            type="button"
            onClick={this.changeFlag}
            style={{
              border: "0",
              background: "#add8f7",
              height: "30px",
              width: "100px",
              color: "white",
              outline: "none",
            }}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
