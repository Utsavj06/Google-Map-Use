import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { Fragment } from 'react'
import locMarker from '../152964.svg'

const Map = ({isLoaded}) => {
    const containerStyle = {
        width: '100vw',
        height: '100vh'
      };
      
      const center = {
        lat: 25.2838,
        lng: 83.1156
      };

      const ballia = {
        lat: 25.3176,
        lng:  82.9739
      }

      const markers = [
       { name: 'mgs',
        location: {
          lat: 25.2838,
          lng: 83.1156 
        }},
       { name: 'vns',
        location: {
          lat: 25.3176,
        lng:  82.9739
        }},
       { name: 'chandauli',
        location: {
          lat: 25.2605,
          lng: 83.2645
        }},
       { name: 'kanpur',
        location: {
          lat: 25.3502,
          lng: 83.2577
        }},
      ]
  return (
    <div>
        {isLoaded && <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/*<Marker position={center} />
        <Marker position={ballia} /> */}
        {markers.map(location=> <Fragment key={location.name}>
        <Marker position={location.location} options={{
          icon: locMarker
        }}/>
        </Fragment>)}
      </GoogleMap>
      </>}
    </div>
  )
}

export default Map