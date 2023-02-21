import React from "react";

export default function BackgroundForAboveElement() {
  return (
    <div className="background-for-above-element" style={{
      marginTop: '-98vh',
      position: 'absolute',
      right: 0,
      width: '100%',
      zIndex: -1,
      height: '30%'
    }}>
      <img src="images/group-6.svg" alt="group-6" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}/>
    </div>
  );
}