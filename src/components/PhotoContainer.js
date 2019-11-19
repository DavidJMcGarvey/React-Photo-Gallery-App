import React, { Component } from 'react'
import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    return (
      {SOMETHING.map(photo => {
        <Photo></Photo>
      })}
    ) 
  }
}