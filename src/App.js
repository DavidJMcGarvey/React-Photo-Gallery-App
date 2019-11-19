import React from 'react';
import './App.css';


// Dependencies
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


const App = () => {
  return (
    <div className="Container">
      <Search></Search>
      <Nav></Nav>
      <PhotoContainer></PhotoContainer>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
