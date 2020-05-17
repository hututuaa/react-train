import React from 'react';
import axios from 'axios';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'
import InfiniteScroll from 'react-infinite-scroller';
import Card from './compontents/Card/index'
import Nav from './compontents/Nav/index'
import './index.css'

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
      languageList: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
      language: 'All',
      display: 'none',
      hasMore: true,
      currentPage: 1,
      loadingBottom: false,
      language: 'All',
      loadingTop: true
    };
    this.handleClick = this.handleClick.bind(this);

  }
  async componentDidMount() {
    await this.getData();
  }

  handleClick = async e => {
    if(e){
      this.setState({
        loadingTop:true,
        loadingBottom:false,
      })
    }
    await this.getData(e)
  }
  changePage = async () => {
      this.setState({
      hasMore: true,
      loadingBottom:true,
    })
    await this.getData()
  }
  getData = (changeLanguage = false) => {
    let { currentPage, language, myData, loadingTop, loadingBottom } = this.state;
    currentPage = changeLanguage ? 1 : currentPage
    language = changeLanguage ? changeLanguage : language
    myData = changeLanguage ? [] : myData
    const url = `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories&page=${currentPage}`
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(data => {
          resolve(data)
          this.setState({
            myData: [...myData, ...data.data.items],
            display: 'none',
            hasMore: false,
            loadingBottom: false,
            currentPage: currentPage + 1,
            language: language,
            loadingTop: false
          })
        }).catch(res => {
          reject(res)
        })
    })

  }


  render() {
    const { myData, loadingBottom, loadingTop } = this.state;
    return (
      <article >
        <Nav handleClick={this.handleClick} />
        {loadingTop ? <div style={{ textAlign: 'center', marginTop: '100px' }}><i className="fa fa-spinner" style={{ fontSize: '130px' }} /></div> : ""}
        <InfiniteScroll
          pageStart={0}
          initialLoad={false}
          loadMore={this.changePage}
          hasMore={this.state.hasMore}
          loader={null}

        >
          <div className="content" style={{ visibility: loadingTop ? 'hidden' : 'visible' }} >
            {myData.map((item, key) => <Card item={item} index={key} key={item.id + '-' + key} />)}
          </div>
        </InfiniteScroll>
        {loadingBottom ? <div style={{ textAlign: 'center', marginTop: '100px' }}><i className="fa fa-spinner" style={{ fontSize: '130px' }} /></div> : ""}
      </article>
    );
  }
}
export default Popular