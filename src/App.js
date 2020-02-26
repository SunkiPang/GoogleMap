import React, { Component } from "react";
import "./App.css";
import GoogleMap, { infoWindow } from "google-map-react";
import CustomMarker from "./components/CustomMarker";

const {REACT_APP_GMAP_KEY} = process.env

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [
        {
          id: 0,
          marker_lat: -17.5181,
          marker_lng: 177.952345
        }
      ]
    }; //state
  }

  handleCreate = (marker_lat, marker_lng) => {
    const { marker } = this.state;
    this.setState({
      marker: [...marker, { key:+new Date(), marker_lat, marker_lng }]
    });
  };

  check_alert = () => {
    // alert("wow");
    console.log("wowowo");
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          onClick={({ lat, lng }) => {
            this.handleCreate(lat, lng);
            console.log(lat, lng);
          }}
          bootstrapURLKeys={{ key: REACT_APP_GMAP_KEY }}
          defaultCenter={{ lat: -17.8181, lng: 177.952345 }}
          defaultZoom={10}
        >
          <CustomMarker
            id="-1"
            key="-1"
            lat="-18.142100"
            lng="178.442345"
            color="blue"
            onClick={this.check_alert}
          />
          {this.state.marker.map((marker, i) => {
            return (
              <CustomMarker
                id={i}
                key={i}
                lat={marker.marker_lat}
                lng={marker.marker_lng}
                color="red"
                onClick={() => console.log(marker)}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  }
}

export default App;
