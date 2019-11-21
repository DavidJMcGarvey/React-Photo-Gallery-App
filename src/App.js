// Imports 
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


// App Components
import Header from './components/Header';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound404 from './components/PageNotFound404';

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
    this.searchPhotos();
  }

  searchPhotos = (query = 'rainbows')  => {
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
      <BrowserRouter>
        <div className="Container">
            <Header />
            {/* <Switch> */}
              <Route path="/" render={ (props) => <Search {...props} onSearch={this.searchPhotos} wrongRoute={this.onWrongRoute}/> }/>
              <Route path="/" render={ () => <Nav search={this.searchPhotos}/> }/>

              {
                (this.state.loading)
                ? <p>Loading...</p> 
                : <Route path="/" render={ () => <PhotoContainer data={this.state.photos} title={this.state.query}/> }/>
              }
              {/* <Route component={PageNotFound404}> */}
            {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
