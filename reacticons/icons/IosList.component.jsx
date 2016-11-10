import React from 'react';

const IosList = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 152h192v16H192zM192 248h192v16H192zM192 344h192v16H192z"/>
    <circle cx="144" cy="160" r="16"/>
    <circle cx="144" cy="256" r="16"/>
    <circle cx="144" cy="352" r="16"/>
  </svg>
  )
}

export default IosList;