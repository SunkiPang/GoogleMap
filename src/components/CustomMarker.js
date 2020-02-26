import React from "react";
import "./Marker.css";

const CustomMarker = props => {
  const { name, color } = props;

  function handleClick(e) {
    e.preventDefault()
    props.onClick && props.onClick(e)
  }

  return (
    <div onClick={handleClick}>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
        
      />
      <div className="pulse" />
      <div style={{backgroundColor:'white', zIndex:100, fontSize: 30}}></div>
    </div>
  );
};

export default CustomMarker;
