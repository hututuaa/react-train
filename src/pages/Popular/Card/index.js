import React from "react";
import styles from "./index.css";

export default class Card extends React.Component {
  render() {
    const { item, index } = this.props;

    return (
      <section className={styles.contentItem} key={`${item.id}-${item.index}`}>
        <div>
          <div className={styles.contentNum}>#{index + 1}</div>
          <div className={styles.contentImg}>
            <img
              src={item.owner.avatar_url}
              style={{ width: "150px", height: "150px" }}
              alt=""
            />
          </div>
          <div className={styles.contentName}>
            <a href={item.html_url}>{item.name}</a>
          </div>
          <div className={styles.contentDesc}>
            <ul>
              <li>
                <i className="fa fa-user" />
                <a href={item.owner.html_url}>{item.name}</a>
              </li>
              <li>
                <i className="fa fa-star" />
                <span>{item.stargazers_count} stars</span>
              </li>
              <li>
                <i className="fa fa-code-fork" />
                <span>{item.forks_count} forks</span>
              </li>
              <li>
                <i className="fa fa-exclamation-triangle" />
                <span>{item.open_issues_count} open_issues</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
