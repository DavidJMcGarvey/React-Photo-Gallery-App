import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


// Dependencies
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

import apiKey from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  searchPhotos() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&per_page=10`)
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="Container">
        <Search onSearch={this.searchPhotos}></Search>
        <Nav></Nav>
        <PhotoContainer render></PhotoContainer>
        <NotFound></NotFound>
      </div>
    );
  }
  
}

export default App;
