import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'

const containerStyle = {
  width: '60%',
  height: '45vh',
  borderRadius: '12px',
}

const center = {
  lat: 47.663452,
  lng: 26.27323,
}
export const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBWOw_Mu7uv4htXtTXyQKEVJVM679uTiOo',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])
  console.log(map)
  return isLoaded ? (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} onLoad={onLoad} onUnmount={onUnmount}>
        <></>
      </GoogleMap>
    </>
  ) : (
    <></>
  )
}
