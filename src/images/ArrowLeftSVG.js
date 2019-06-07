
import React from "react";
const ArrowLeftSVG =(props)=>{
    let { className, height=32, width=32, fill="black", stroke = "black", strokeWidth = "0", onClick, size } = props;
  if(size){
    height = size;
    width = size;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick} transform='rotate(180)' >
      <g id="Arrow">
        <path id="path_3_" d="M40.9 3.8L101.1 64l-60.2 60.2-14-14L73 64 26.9 17.9l14-14.1z"/>
      </g>
    </svg>
  );
};

export default ArrowLeftSVG;
