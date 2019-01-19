import React from 'react'
import getPlace from './get-place';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-bootstrap';

function InputBox(props) {
	return (
<span>
	text 
</span>
	);
}
			// <TextField
			// 	label={props.type}
			// 	onChange={e => props.handleChange(e)}
	        // />

// <input type="text" name={this.props.type} onChange={e => this.props.handleChange(e)} />
export default class InputArea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			lng: null,
		}
	}

	async onClick() {
		let lat = this.state.lat;
		let lng = this.state.lng;
		if (lat && lng && lat >= -90 & lat <= 90 && lng >= -180 && lng <= 180) {
			var click = await getPlace(lat, lng);
			console.log("click: " + click);
			this.props.setTotalState({
				lat: lat,
				lng: lng,
				locData: click,
			});
		}
	}

	changeLat(e) {
		var val = parseFloat(e.target.value);
		if (!isNaN(val)) {
			console.log("input lat set to: " + val);
			this.setState({ lat: val });
		} else {
			alert("please input a value latitude")
		}
	}

	changeLng(e) {
		var val = parseFloat(e.target.value);
		if (!isNaN(val)) {
			console.log("input lng set to: " + val);
			this.setState({ lng: val });
		} else {
			alert("please input a value longitude")
		}
	}

	render() {
		return (
			<Row className="inputarea">
			<Col md={4}>
			Input a Location of Choice
			<InputBox type="Latitude" handleChange={e => this.changeLat(e)} />
			<InputBox type="Longitude" handleChange={e => this.changeLng(e)} />
			</Col>
			<Col md={4}>
			<Button color="secondary" className="inputbutton" variant="contained" onClick={() => this.onClick()}> Get Location </Button>
			</Col>
			</Row>
		);
	}
}