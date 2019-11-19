import React from 'react';
import './App.css';


// Dependencies
import Search from './components/Search';
import Nav from './components/Nav';
import Photo from './components/Photo';
import NotFound from './components/NotFound';


const App = () => {
  return (
    <div className="Container">
      <Search></Search>
      <Nav></Nav>
      <Photo></Photo>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
