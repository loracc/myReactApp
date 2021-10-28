import React from 'react';

const ImageList = props => { 
  let images = props.images.map(({ id, urls, description }) => {
      return <img alt={description} src={urls.regular} key={id}/>
  });

  return <div>{images}</div>
}

export default ImageList;