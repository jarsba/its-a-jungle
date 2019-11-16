import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class IssueMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      hasLocation: false,
      latlng: {
        lat: 51.505,
        lng: -0.09,
      },
    }
  }


  mapRef = React.createRef();

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e: Object) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null

    return (
      <div>
        <Map
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
          ref={this.mapRef}
          zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}
        </Map>
      </div>
    )

  }
}