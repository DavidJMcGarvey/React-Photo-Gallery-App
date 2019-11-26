// Imports 
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



// App Components
import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

import apiKey from './config';

class App extends Component {
  constructor() {
    super();
    this.searchPhotos = this.searchPhotos.bind(this);
    this.state = {
      photos: [],
      loading: true,
      query: ''
    }
  }

  componentDidMount() {
    this.searchPhotos(this.state.query || "rainbows");
  }

  searchPhotos = (query)  => {
    this.setState({ loading: true })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false,
          query: query
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      });
  }

  render() {
    return (
        <div className="Container">
          <Header />
            <Search onSearch={this.searchPhotos} />
            <Nav search={this.searchPhotos}/>
            {
              (this.state.loading)
              ? <p>Loading...</p> 
              : <PhotoContainer data={this.state.photos} title={this.state.query}/>
            }
        </div>
    );
  }
  
}

export default App;
