import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Axios from "axios";

const AnyReactComponent = ({ name, phone }) => (

  <div style={{
    color: 'white',
    background: 'grey',
    padding: '2px 2px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10%',
    transform: 'translate(-50%, -50%)'
  }}>
    {name}<br/>
    {phone}
  </div>
);
class SimpleMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // "key": "AIzaSyCS-nM5E7swe1c9BWgIhipBeqA14kWWkDI"
      hosts_old: [{
        name: 'Paul',
        lat: 45.6599,
        lng: 25.6033,
        phone: '0733888712'
      }, {
        name: 'Fatu Bogdan',
        lat: 45.64,
        lng: 25.615,
        phone: '0722343567'
      }, {
        name: 'Paula',
        lat: 45.8599,
        lng: 25.3033,
        phone: '07112254656'
      }],
      isLoading : true
    };

  }

  static defaultProps = {
    center: {
      lat: 45.64,
      lng: 25.60
    },
    zoom: 13
  };

  _onClick = ({x, y, lat, lng, event}) => {
    alert('Adresa salvata');
    this.setState({
        lat: lat, 
        lng: lng,
        isClicked: true
    }); 
  }

  getHosts = () => {
    /*
    Axios.get("http://localhost:3001/hosts")
        .then((response) => {
          this.setState({ hosts: response.data });
        })
    */

        fetch("http://localhost:3001/hosts")
        .then(response => response.json())
        .then(data =>
          this.setState({
            hosts: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
  
  }

  render() {
    this.getHosts();
    //alert(this.state.isLoading);
    // to be removed
    // this.state.hosts = this.state.hosts_old;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact onClick={this._onClick}
          bootstrapURLKeys={{ key: 'AIzaSyBmFPKtqmN4mC_yOi1v7THSdXWlx4sqtP8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {!this.state.isLoading ? (
        this.state.hosts.map((marker, i) => {
            return(
                <AnyReactComponent key={i}
                    lat={marker.lat}
                    lng={marker.lng}
                    name={marker.name}
                    phone={marker.phone}
                />
            )
        })
        ) : ( 
          <h3>Loading...</h3>
        )} 

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;