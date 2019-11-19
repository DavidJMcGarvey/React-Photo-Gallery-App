import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


// Dependencies
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

import { apiKey, user_id } from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.searchPhotos();
  }

  searchPhotos() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&user_id=${user_id}&per_page=36&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      });
  }

  render() {
    return (
      <div className="Container">
        <Search onSearch={this.searchPhotos}></Search>
        <Nav></Nav>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PhotoContainer data={this.state.photos}/>
        }
        
        <NotFound></NotFound>
      </div>
    );
  }
  
}

export default App;
