import React from 'react';

const MdStopwatch = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
    <path d="M232 306.667h48V176h-48v130.667z"/>
    <path d="M407.67 170.27l30.786-30.785-33.942-33.94-30.785 30.785C341.216 111.057 300.37 96 256 96 149.96 96 64 181.96 64 288s85.96 192 192 192 192-85.96 192-192c0-44.37-15.057-85.217-40.33-117.73zm-45.604 223.796C333.734 422.398 296.066 438 256 438s-77.735-15.602-106.066-43.934C121.602 365.736 106 328.066 106 288s15.602-77.735 43.934-106.066C178.264 153.602 215.934 138 256 138s77.734 15.602 106.066 43.934C390.398 210.264 406 247.934 406 288s-15.602 77.735-43.934 106.066zM192 32h128v48H192z"/>
  </svg>
  )
}

export default MdStopwatch;