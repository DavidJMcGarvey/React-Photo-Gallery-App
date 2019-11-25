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
          
            <Route path="/search/:results" render={ (props) => <Search {...props} onSearch={this.searchPhotos} /> }/>
            {/* <Search onSearch={this.searchPhotos} /> */}
            {/* <Route path="/" render={ () => <Nav search={this.searchPhotos}/> }/> */}
            <Nav search={this.searchPhotos}/>
            {
              (this.state.loading)
              ? <p>Loading...</p> 
              : <PhotoContainer data={this.state.photos} title={this.state.query}/>
            }
            <Route component={PageNotFound404} />
            {/* <Route path="/" render={ () => <PhotoContainer data={this.state.photos} title={this.state.query}/> }/> */}

        </div>
    );
  }
  
}

export default App;
