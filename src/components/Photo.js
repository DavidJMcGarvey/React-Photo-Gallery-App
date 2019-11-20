import React from 'react';

const Photo = (props) => {
  return (
    <li>
      <img src={`https://farm${props.farm_id}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
  )
}

export default Photo