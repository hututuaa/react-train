import React from "react";
import styles from "./index.css";
// import './index.css'
import "react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
// eslint-disable-next-line import/order
import axios from "axios";

class Battle extends React.Component {
  style = {
    btn: {
      height: "30px",
      width: "100px",
      outline: "none",
      background: "white",
      border: "0",
      marginLeft: "20px",
      color: "#ccc",
    },
    btnLight: {
      height: "30px",
      width: "100px",
      outline: "none",
      background: "black",
      border: "0",
      marginLeft: "20px",
      color: "white",
      cursor: "pointer",
    },
    input: {
      width: "300px",
      height: "30px",
      background: "none",
      outline: "none",
      border: "0",
      boxShadow:
        " 0 1px 0 rgba(0,0,0,.2) inset,0 -1px 0 rgba(255,255,255,.2) inset",
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      leftValue: "",
      rightValue: "",
      showLeft: "none",
      showRight: "none",
      isClickable: true,
      leftResult: {},
      rightResult: {},
    };
  }

  componentDidUpdate() {
    document.addEventListener("keydown", this.onkeydown1);
    document.addEventListener("keydown", this.onkeydown2);
  }

  changeLeft = (e) => {
    this.setState({
      leftValue: e.target.value,
      isClickable: false,
    });
  };

  changeRight = (e) => {
    this.setState({
      rightValue: e.target.value,
      isClickable: false,
    });
  };

  getValue = (value) => {
    const url = `https://api.github.com/users/${value}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  };

  sumbitLeft = async () => {
    const { leftValue } = this.state;
    if (!leftValue) {
      return;
    }
    this.setState({
      showLeft: "block",
    });
    const res = await this.getValue(leftValue);
    const resDate = res.data;
    this.setState({
      leftResult: resDate,
    });
  };

  sumbitRight = async () => {
    const { rightValue } = this.state;
    if (!rightValue) {
      return;
    }
    this.setState({
      showRight: "block",
    });
    const res = await this.getValue(rightValue);
    const resDate = res.data;
    this.setState({
      rightResult: resDate,
    });
  };

  onkeydown1 = (e) => {
    if (e.keyCode === 13) {
      this.sumbitLeft();
    }
  };

  onkeydown2 = (e) => {
    if (e.keyCode === 13) {
      this.sumbitRight();
    }
  };

  cancelLeft = () => {
    this.setState({
      leftValue: "",
      showLeft: "none",
    });
  };

  cancelRight = () => {
    this.setState({
      rightValue: "",
      showRight: "none",
    });
  };

  changeFlag = () => {
    const { leftResult, rightResult } = this.state;
    this.props.history.push({
      pathname: "/battle/result",
      query: {
        playerOne: JSON.stringify(leftResult),
        playerTwo: JSON.stringify(rightResult),
      },
    });
  };

  render() {
    const { leftValue, rightValue, showLeft, showRight } = this.state;
    return (
      <div>
        <div>
          <div className={styles.title1}>Instructions</div>
          <div className={styles.firstCard}>
            <div>
              <div className={styles.introduceOne}>Enter two Github users</div>
              <div className={styles.contentBox1}>
                <i
                  className={[styles.fa, styles.faUsers]}
                  style={{
                    color: "black",
                    display: "inline-block",
                    fontSize: "160px",
                    paddingTop: "10px",
                  }}
                />
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div className={styles.introduceTwo}>Battle</div>
              <div className={styles.contentBox1}>
                <i
                  className={[styles.fa, styles.faPlane]}
                  style={{
                    color: "black",
                    display: "inline-block",
                    fontSize: "200px",
                    paddingTop: "10px",
                  }}
                />
              </div>
            </div>
            <div>
              <div className={styles.introduceThree}>See the winner</div>
              <div className={styles.contentBox1}>
                <i
                  className={[styles.fa, styles.faTrophy]}
                  style={{
                    color: "#fed71a",
                    display: "inline-block",
                    paddingTop: "10px",
                    fontSize: "200px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title2}>Players</div>
          <div className={styles.secondCard}>
            <div className={styles.leftSearch}>
              <div style={{ fontWeight: "300" }}>Palyer One</div>
              <div>
                <input
                  type="text"
                  placeholder="github username"
                  value={this.state.leftValue}
                  onChange={this.changeLeft.bind(this)}
                  style={this.style.input}
                />
                <button
                  type="button"
                  disabled={this.state.isClickable}
                  style={leftValue ? this.style.btnLight : this.style.btn}
                  onClick={(e) => this.sumbitLeft(e)}
                  onKeyDown={(e) => this.onkeydown1(e)}
                >
                  sumbit
                </button>
                <div
                  style={{
                    display: this.state.showLeft,
                    width: "450px",
                    height: "100px",
                    background: "#baccd9",
                    position: "relative",
                    top: "-30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "100px",
                    }}
                  >
                    <i
                      className={[styles.fa, styles.faTimes]}
                      onClick={this.cancelLeft}
                      style={{ color: "#ee3f4d", fontSize: "30px" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    style={{
                      color: "#8076a3",
                      position: "relative",
                      top: "-80px",
                      width: "300px",
                    }}
                  >
                    <img
                      alt="left-img"
                      style={{
                        width: "55px",
                        height: "55px",
                        verticalAlign: "middle",
                        display: "inlineBlock",
                        marginLeft: "80px",
                      }}
                      src={`https://github.com/${leftValue}.png?size=200`}
                    />
                    <a
                      href={`https://github.com/${leftValue}`}
                      style={{
                        color: "#2b73af",
                        fontSize: "30px",
                        verticalAlign: "middle",
                        marginLeft: "10px",
                      }}
                    >
                      {leftValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightSearch}>
              <div style={{ fontWeight: "300" }}>Palyer Two</div>
              <div>
                <input
                  type="text"
                  placeholder="github username"
                  value={this.state.rightValue}
                  onChange={this.changeRight.bind(this)}
                  style={this.style.input}
                />
                <button
                  type="button"
                  disabled={this.state.isClickable}
                  onClick={this.sumbitRight.bind(this)}
                  style={rightValue ? this.style.btnLight : this.style.btn}
                  onKeyDown={(e) => this.onkeydown2(e)}
                >
                  sumbit
                </button>
              </div>
              <div
                style={{
                  display: this.state.showRight,
                  width: "450px",
                  height: "100px",
                  background: "#baccd9",
                  position: "relative",
                  top: "-30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: "100px",
                  }}
                >
                  <i
                    className={[styles.fa, styles.faTimes]}
                    onClick={this.cancelRight}
                    style={{ color: "#ee3f4d", fontSize: "30px" }}
                    aria-hidden="true"
                  />
                </div>
                <div
                  style={{
                    color: "#8076a3",
                    position: "relative",
                    top: "-80px",
                    width: "300px",
                  }}
                >
                  <img
                    alt="right-img"
                    style={{
                      width: "55px",
                      height: "55px",
                      verticalAlign: "middle",
                      display: "inlineBlock",
                      marginLeft: "80px",
                    }}
                    src={`https://github.com/${rightValue}.png?size=200`}
                  />
                  <a
                    href={`https://github.com/${rightValue}`}
                    style={{
                      color: "#2b73af",
                      fontSize: "30px",
                      verticalAlign: "middle",
                      marginLeft: "10px",
                    }}
                  >
                    {rightValue}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            border: "none",
            display:
              showLeft === "block" && showRight === "block" ? "block" : "none",
          }}
        >
          <button
            type="button"
            onClick={this.changeFlag}
            style={this.style.btnLight}
          >
            BATTLE
          </button>
        </div>
      </div>
    );
  }
}

export default Battle;
