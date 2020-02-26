import React from "react";
import PropTypes from 'prop-types';

import GoogleMap, { infoWindow } from "google-map-react";
import CustomMarker from "./components/CustomMarker";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";


export default {
  title: "Map",
  component: GoogleMap,
  decorators: [withKnobs]
};

export const Map = () => (
  
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMap
      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}
      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}
      defaultZoom={10}
    ></GoogleMap>
  </div>
);

export const MapMarker = () => {
  const defaultValue1 = '#ff00ff';
  const defaultValue2 = '#00ffff';

const value1 = color('Color', defaultValue1, 'GROUP-ID1');
const value2 = color('Color', defaultValue2, 'GROUP-ID2');
  return(
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMap
      bootstrapURLKeys={{ key: "AIzaSyBrB8u2TKZwnDzmUP8sIHaOvvPzr8G5nNk" }}
      defaultCenter={{ lat: -17.8181, lng: 177.952345 }}
      defaultZoom={10}
    >
      <CustomMarker
        id="-1"
        key="-1"
        lat="-17.942100"
        lng="177.742345"
        color={`${value1}`}
      />
      <CustomMarker
        id="0"
        key="0"
        lat="-17.842100"
        lng="178.142345"
        color={`${value2}`}
      />
    </GoogleMap>
  </div>
  )
};


