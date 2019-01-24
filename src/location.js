import React from 'react';

export default class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: null,
			area1: null,
			area2: null,
			lat: this.props.lat,
			lng: this.props.lng,
			formatted_address: null,
		}
	}

	getAddresses(locData) {
		if (!locData) {
			return;
		}
		var places = locData.results;
		// var country = places.filter(place => place.types.includes('country'))[0].formatted_address;
		var area1 = places.find(place => place.address_components.some(component => component.types.includes("administrative_area_level_1")))
		area1 = area1 ? area1.address_components : null;
		area1 = area1 ? area1.find(component => component.types.includes('administrative_area_level_1')).long_name : null;
		var area2 = places.find(place => place.address_components.some(component => component.types.includes("administrative_area_level_2")));
		area2 = area2 ? area2.address_components : null;
		console.log("area2: " + JSON.stringify(area2));
		area2 = area2 ? area2.find(component => component.types.includes('administrative_area_level_2')).long_name : null;
		var country = places.find(place => place.address_components.some(component => component.types.includes("country")));
		country = country ? country.address_components : null;
		country = country ? country.find(component => component.types.includes('country')).long_name : null;
		return {
			country: country,
			area1: area1,
			area2: area2,
			formatted_address: locData.results[0].formatted_address,
		}
		// var area1 = places[0].address_components.filter(component => component.types.includes('administrative_area_level_1'));
		// if(area1.length > 0) {
		// 	area1 = area1[0]
		// }
	}
	componentDidUpdate(prevProps) {
		if (this.props.locData !== prevProps.locData) {
			this.setState(this.getAddresses(this.props.locData));
			this.setState({ lat: this.props.lat, lng: this.props.lng })
		}
	}

	render() {
		var addressString = `			Country: ${this.state.country} \
			State: ${this.state.area1} \
			City: ${this.state.area2} \n\
			Latitude: ${this.state.lat}\
			Longitude: ${this.state.lng}`
		return (
			<div className='location'>
			{this.state.formatted_address} <br />
			latitude:{this.state.lat}<span>&nbsp;&nbsp;&nbsp;</span>longitude:{this.state.lng}
		</div>);
	}
}