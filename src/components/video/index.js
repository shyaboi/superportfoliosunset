import React from 'react';
import './style.css';
import mp from './prof.mp4'

function video() {
  return (
    <video autoPlay muted loop id="prof"   style={{
    }}>
    <source src={mp} type="video/mp4" />
  </video>
  )
}

export default video;



