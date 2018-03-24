import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs( withGoogleMap( ( props ) =>
  <GoogleMap
    defaultZoom={ 12 }
    defaultCenter={ { lat: 40.7304172, lng: -111.9085368 } }
  >
    { props.isMarkerShown && <Marker position={ { lat: 40.7304172, lng: -111.9085368 } } /> }
  </GoogleMap>
) )


export default MyMapComponent