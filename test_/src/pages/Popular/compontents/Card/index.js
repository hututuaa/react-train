import React from 'react'
import './index.css'
export default class Card extends React.Component {
    render() {
        
        const {item, index} = this.props

        return (
            <section className="content-item" key={item.id+'-'+item.index}>
                <div>
                    <div className="content-num">#{index + 1}</div>
                    <div className="content-img"><img src={item.owner.avatar_url} style={{ width: '150px', height: '150px' }} alt="" /></div>
                    <div className="content-name"><a href={item.html_url}>{item.name}</a></div>
                    <div className="content-desc">
                        <ul>
                            <li>
                                <i className="fa fa-user fa-1x"  />
                                <a href={item.owner.html_url}>{item.name}</a>
                            </li>
                            <li>
                                <i className="fa fa-star fa-1x"/>
                                <span>{item.stargazers_count}  stars</span>
                            </li>
                            <li>
                                <i className="fa fa-code-fork fa-1x"/>
                                <span>{item.forks_count} forks</span>
                            </li>
                            <li>
                                <i className="fa fa-exclamation-triangle  fa-1x" />
                                <span>{item.open_issues_count}  open_issues</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}