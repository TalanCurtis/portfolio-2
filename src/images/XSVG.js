import React from "react";

const XSVG =(props)=>{
  let { className, height=32, width=32, fill="black", fill2="white", stroke = "black", strokeWidth = "0", onClick, size } = props;
  if(size){
    height = size;
    width = size;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className} height={height} width={width} fill={fill} fill2={fill2} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <g id="X">
        <path d="M101-.003L119.003 18 18 119.003-.003 101z"/>
        <path d="M-.003 18L18-.003 119.003 101 101 119.003z"/>
      </g>
    </svg>
  );
};

export default XSVG;