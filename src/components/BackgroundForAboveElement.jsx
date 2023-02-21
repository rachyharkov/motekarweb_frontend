import React from "react";

export default function BackgroundForAboveElement({ image }) {
  return (
    <div className="background-for-above-element" style={{
      marginTop: '-98vh',
      position: 'absolute',
      right: 0,
      width: '100%',
      zIndex: -1,
      height: '30%'
    }}>
      <img src={image} alt="group-6" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}/>
    </div>
  );
}