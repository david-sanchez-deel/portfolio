import React, { Component, Fragment } from 'react';
import { Header, ListNews, Form } from './components';

class App extends Component {
  state = {
    news: [],
  }
  async componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=e8253f5315e54ac286b5507b72ad977d`;

    const news = await fetch(url).then((response) => response.json());
    this.setState({
      news: news.articles
    })
  }

  render () {
    return (<Fragment>
      <Header title="Noticias REACT API"/>
      <div className="container white news-container">
        <Form search={this.getNews}/>
        <ListNews news={this.state.news} />
      </div>
    </Fragment>)
  }
}
export default App;
