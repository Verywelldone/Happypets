import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => (
 
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
class SimpleMap extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      "key": "AIzaSyCS-nM5E7swe1c9BWgIhipBeqA14kWWkDI"
    }
  }
 
  static defaultProps = {
    center: {
      lat: 45.64,
      lng: 25.60
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyBmFPKtqmN4mC_yOi1v7THSdXWlx4sqtP8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent  lat={45.64}   lng={25.615}   text={'Fatu Bogdan'}/>
          <AnyReactComponent  lat={45.6599}   lng={25.6033}   text={'Paul'}/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;