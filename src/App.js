import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'Ready'}</div>;
  }
}

export default App;
