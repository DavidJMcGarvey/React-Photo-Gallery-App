import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route, 
} from 'react-router-dom';


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
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&text=cats&api_key=${apiKey}&user_id=${user_id}&per_page=24&format=json&nojsoncallback=1`)
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
      <BrowserRouter>
        <div className="Container">
          <Route path="/" render={ () => <Search onSearch={this.searchPhotos(this.value)}></Search> }/>

          <Nav />

          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoContainer data={this.state.photos}/>
          }
          
          <NotFound />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
