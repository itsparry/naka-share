import React, { useCallback, useMemo, useRef} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { mapStyle } from '../components/MapStyle';



const containerStyle = {
  width: '100%',
  height: '100%'
};


const MyComponent = (props) => {
    
    //addition of number in lat is to offset the map for the pin
    // 0.00014 for mac 13 inch 
    // 0.000073 for bigger screen

    const center = useMemo(() => ({lat: (43.660551 + 0.0014), lng: -79.391841}), []);
    const mapRef = useRef()
    const onLoading = useCallback((map) => (mapRef.current = map), [])



    

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

  const options = useMemo(()=>({
    disableDefaultUI: true,
    clickableIcons: false,
  }),[])
  
  const Content = props.component


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoading}
        // onUnmount={onUnmount}
        options={{options, styles: mapStyle}}
      >
        <div>
          {Content}
          <Marker/>
        </div>
      </GoogleMap>
  ) : <></>

  
}

export default React.memo(MyComponent)