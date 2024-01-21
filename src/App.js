import logo from './logo.svg';
import './App.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Map from './components/Map';
import { MapOption } from './components/MapConfig';

function App() {
  const { isLoaded } = useJsApiLoader({
    id: MapOption.googleMapApiKey,
    googleMapsApiKey: MapOption.googleMapApiKey
  })
  return (
    <div className="App">
      <Map isLoaded={isLoaded} />
    </div>
  );
}

export default App;
