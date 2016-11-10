import React from 'react';

const IosPrint = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
    <path d="M128 224h256v224H128z"/>
    <path d="M127.5 224.5h256v224h-256zM111.5 64.5h288v32h-288z"/>
    <path d="M432.5 112.5h-352c-17.645 0-33 12.842-33 30.31V301.2c0 17.468 15.355 33.3 33 33.3h31v-126h288v126h33c17.645 0 31-15.832 31-33.3V142.81c0-17.468-13.355-30.31-31-30.31z"/>
  </svg>
  )
}

export default IosPrint;
