import React from 'react'
import styles from './index.css'
// import  './index.css'
export default class Card extends React.Component {
    render() {
        const {item, index} = this.props

        return (
            <section className={styles.contentItem} key={item.id+'-'+item.index}>
                <div>
                    <div className={styles.contentNum}>#{index + 1}</div>
                    <div className={styles.contentImg}><img src={item.owner.avatar_url} style={{ width: '150px', height: '150px' }} alt="" /></div>
                    <div className={styles.contentName}><a href={item.html_url}>{item.name}</a></div>
                    <div className={styles.contentDesc}>
                        <ul className={styles.ulContent}>
                            <li>
                                <i className="fa fa-user-o " style={{color: '#fba414', display:'inline-block',marginRight: '10px'}} aria-hidden="true"/>
                                <a href={item.owner.html_url}>{item.name}</a>
                            </li>
                            <li>
                                <i className='fa fa-star' style={{    color: '#fed71a',display:'inline-block',position: 'relative',left: '-3px', marginRight: '10px'}}/>
                                <span>{item.stargazers_count}  stars</span>
                            </li>
                            <li>
                                <i className='fa fa-code-fork' style={{color:'#0eb0c9',display:'inline-block',marginRight:'10px'}}/>
                                <span>{item.forks_count} forks</span>
                            </li>
                            <li>
                                <i className='fa fa-exclamation-triangle' style={{color:'#ab372f',display:'inline-block',position:'relative',left:'-8px',marginRight: '10px'}}/>
                                <span>{item.open_issues_count}  open_issues</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}