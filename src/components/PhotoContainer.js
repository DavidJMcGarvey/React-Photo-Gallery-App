import React from 'react'
import Photo from './Photo';
import NotFound from './NotFound';

// Photos Component
const PhotoContainer = (props) => {

  const photos = props.data;
  let title = props.title;
  let photoList;

  if (photos.length > 0) {
    photoList = photos.map( photo =>
      <Photo 
        id={photo.id}
        key={photo.id.toString() + 1}
        server={photo.server}
        secret={photo.secret}
        farm_id={photo.farm}
      />
    )
  } else {
    title = 'Sorry dawg'
    photoList = <NotFound />
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

export default PhotoContainer;