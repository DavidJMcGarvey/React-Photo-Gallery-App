import React from 'react'
import Photo from './Photo';

const PhotoContainer = (props) => {
    return (
      <div className="photo-container">
        <h2>Results</h2>
          <ul>
          {props.data.map( photo =>
            <li key={photo.id.toString()}>
              <Photo 
                id={photo.id}
                server={photo.server}
                secret={photo.secret}
                farm_id={photo.farm}
              />
            </li>
          )}
          </ul>
      </div>
    ) 
}

export default PhotoContainer