import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
	<GoogleMap
		center={{lat: props.lat, lng: props.lng}}
		zoom={4}
		mapTypeId="hybrid">
		<Marker
			position={{ lat: props.lat, lng: props.lng }}
		/>
	</GoogleMap>
));

export default class MyMap extends React.Component {

	render() {
		console.log("lat: " + this.props.lat + " lng: " + this.props.lng + typeof this.props.lat);
		return (
			<MapWithAMarker className="mymap"
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUGI5_aCtLUVLHNQ9op4ba_4buTbAG3wQ&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
		containerElement = { <div style={{ height: `500px`, width:`900px`,marginRight:'auto',marginLeft:'auto'}} /> }
		mapElement = { <div style={{ height: `100%` }} /> }
		lat = { this.props.lat }
		lng = { this.props.lng }
		/>
	);
}
}