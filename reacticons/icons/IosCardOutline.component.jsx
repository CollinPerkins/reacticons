import React from 'react';

const IosCardOutline = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 112H80c-17.6 0-32 14.4-32 32v224c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V144c0-17.6-14.4-32-32-32zM80 128h352c8.8 0 16 7.2 16 16v32H64v-32c0-8.8 7.2-16 16-16zm368 64v48H64v-48h384zm-16 192H80c-8.8 0-16-7.2-16-16V256h384v112c0 8.8-7.2 16-16 16z"/>
    <path d="M96 320h32v16H96zM160 320h192v16H160z"/>
  </svg>
  )
}

export default IosCardOutline;
