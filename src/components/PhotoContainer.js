import React from 'react'
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

  const photos = props.data;
  let title;
  let photoList;

  if (photos.length > 0) {
    { title = props.title;
      photoList = photos.map( photo =>
      <li key={photo.id.toString()}>
        <Photo 
          id={photo.id}
          server={photo.server}
          secret={photo.secret}
          farm_id={photo.farm}
        />
      </li>
    )}
  } else {
    { title = 'Sorry dawg'
      photoList = <NotFound />}
  }

  return (
    <div className="photo-container">
      <h2>{title}</h2>
        <ul>
          {photoList}
        </ul> 
    </div>
  )
}

export default PhotoContainer