import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ name, phone, days }) => (

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
    {phone}<br/>
    { 'liber: ' + days + ' zile'}
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

  _onClick = ({ lat, lng }) => {
    this.setState({
        lat: lat, 
        lng: lng,
        isClicked: true
    }); 
  }

  getHosts = () => {
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
    
    return (
      
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
                    days={marker.days}
                />
            )
        })
        ) : ( 
          <>Loading...</>
        )} 

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;