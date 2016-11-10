import React from 'react';

const IosImageOutline = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 64v384h384V64H64zm368 368H79V80h353v352z"/>
    <circle cx="304" cy="176" r="16"/>
    <path d="M96 96v256h320V96H96zm198.6 240H153.4L224 235.8 294.6 336zm-6.2-36.6l22.3-31.6 48 68.2h-44.6l-25.7-36.6zM400 336h-21.7l-67.6-96-32.1 45.5L224 208l-90.1 128H112V112h288v224z"/>
  </svg>
  )
}

export default IosImageOutline;
