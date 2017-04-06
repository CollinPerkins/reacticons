import React from 'react';

const IosGrid = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
    <path d="M192 192h128v128H192z"/>
    <path d="M64 64v384h384V64H64zm352 128h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16v80h80v16z"/>
  </svg>
  )
}

export default IosGrid;
