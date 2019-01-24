import React from 'react'
import getPlace from './get-place';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-bootstrap';
import { Typography } from '@material-ui/core';


function InputBox(props) {
	return (
		<TextField
			className="inputbox"
			label={props.type}
			style={{ padding: 0 }}
			placeholder={props.type}
			onChange={e => props.handleChange(e)}
			variant="filled"
		/>
	);
}


// <input type="text" name={this.props.type} onChange={e => this.props.handleChange(e)} />
export default class InputArea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			lng: null,
			isNum: true,
		}
	}

	async onClick() {
		let lat = parseFloat(this.state.lat);
		let lng = parseFloat(this.state.lng);
		if (!isNaN(lat) && !isNaN(lng) && lat >= -90 & lat <= 90 && lng >= -180 && lng <= 180) {
			var click = await getPlace(lat, lng);
			console.log("click: " + click);
			this.props.setTotalState({
				lat: lat,
				lng: lng,
				locData: click,
			});
		}
		else {
			alert("please input valid latitude and longitude")
		}
	}

	changeLat(e) {
		// var val = parseFloat(e.target.value);
		this.setState({ lat: e.target.value });

	}



	changeLng(e) {
		// var val = parseFloat(e.target.value);
		this.setState({ lng: e.target.value });
	}

	render() {
		return (
			<span className="inputarea">
				<div>
					<InputBox type="Latitude" handleChange={e => this.changeLat(e)} />
					<InputBox type="Longitude" handleChange={e => this.changeLng(e)} />
				</div>
				<div>
					<Button color="secondary" className="inputbutton" variant="contained" onClick={() => this.onClick()}> <Typography variant="h5">Get Location</Typography> </Button>
				</div>
			</span>
		);
	}
}