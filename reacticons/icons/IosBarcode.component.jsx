import React from 'react';

const IosBarcode = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
    <path d="M48 128v256h416V128H48zm80 192h-16V192h16v128zm64 32h-16V160h16v192zm71-16h-16V176h16v160zm73 16h-16V160h16v192zm64-32h-16V192h16v128z"/>
  </svg>
  )
}

export default IosBarcode;
