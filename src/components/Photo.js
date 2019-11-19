import React from 'react';

const Photo = (props) => {
  console.log(props);
  return (
    <img src={`https://farm${props.farm_id}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
  )
}

export default Photo