import React from 'react';

const ArtistSvg = (props) => {
  const {className, height, width, fill , stroke, strokeWidth, onClick } = props
  return (
    <svg id="artist" viewBox="0 0 100 100" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  )
};

export default ArtistSvg;