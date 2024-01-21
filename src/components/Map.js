import { GoogleMap, Marker } from '@react-google-maps/api';
import React from 'react'

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
        long:  82.9739
      }
  return (
    <div>
        {isLoaded && <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
        <Marker position={ballia} />
      </GoogleMap>
      </>}
    </div>
  )
}

export default Map