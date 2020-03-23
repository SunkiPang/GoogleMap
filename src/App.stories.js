import React from "react";
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import GoogleMap, { infoWindow } from "google-map-react";
import CustomMarker from "./components/CustomMarker";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';




export default {
  title: "Map",
  component: GoogleMap,
  decorators: [withA11y, withKnobs],
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
    a11y: {
      // optional selector which element to inspect
      element: '#root',
      // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      config: {},
      // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
      options: {},
    },
  }
};

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});



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
      onClick={action("map-clicked")}
    >
      <CustomMarker
        id="-1"
        key="-1"
        lat="-17.942100"
        lng="177.742345"
        color={`${value1}`}
        disabled="true"
        onClick={action("marker1-clicked")}
      />
      <CustomMarker
        id="0"
        key="0"
        lat="-17.842100"
        lng="178.142345"
        color={`${value2}`}
        disabled="false"
        onClick={action("marker2-clicked")}
      />
    </GoogleMap>
  </div>
  )
};


