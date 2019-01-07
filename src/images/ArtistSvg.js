import React from 'react';

const ArtistSvg = (props) => {
  let {className, height, width, fill , stroke, strokeWidth, onClick, size } = props
  if(size){
    height = size;
    width = size;
  }
  return (
    <svg id="artist" viewBox="0 0 100 100" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  )
};

export default ArtistSvg;