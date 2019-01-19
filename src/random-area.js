import React from 'react';
import getPlace from './get-place';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function RandomButton(props) {
	return <Button color="secondary" variant="contained" className="randombutton" onClick={() => props.onClick()}>Throw a dart!</Button>
}

export default class RandomArea extends React.Component {

	getRandomLat() {
		return parseFloat((Math.random() * (180) + -90).toFixed(5))
	}

	getRandomLng() {
		return parseFloat((Math.random() * (360) + -180).toFixed(5))
	}
	async getRandomPlace() {
		let ranLat = this.getRandomLat();
		let ranLng = this.getRandomLng();
		let data = await getPlace(ranLat, ranLng);
		// console.log("not in loop: " + JSON.stringify(data) + data.status);
		while (data.status !== "OK" || data.results[0].formatted_address === "Antarctica") {
			ranLat = this.getRandomLat();
			ranLng = this.getRandomLng();
			// console.log(ranLat + " " + ranLng);
			data = await getPlace(ranLat, ranLng);
			// console.log("in loop: " + data);
		}
		console.log(typeof ranLat)
		this.props.setTotalState({
			lat: ranLat,
			lng: ranLng,
			locData: data,
		});
		// console.log(data.results[0].formatted_address);
		console.log(data);
		// alert(data.results[0].formatted_address);
	}
	render() {
		return (
			<Row>
			<Col className="text-left" xs={4}>Choose a Random Vacation Spot!</Col>
			<Col className="text-left" xs={4}><RandomButton onClick={() => this.getRandomPlace()}/></Col>
			</Row>
		);
	}
}