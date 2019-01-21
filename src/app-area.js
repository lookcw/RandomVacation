import React from 'react';
import RandomArea from './random-area';
import InputArea from './input-area';
import Location from './location'
import MyMap from './map'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Row, Col } from 'react-bootstrap';


export default class AppArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 0,
			lng: 0,
			locData: null,
		}
	}

	setTotalState(newState) {
		this.setState(newState);
	}

	render() {
		return (
			<div>
				<AppBar position="static" color='primary'>
					<Toolbar>
						Random Vacation Picker
					</Toolbar>
				</AppBar>
				<Grid id="grid">
					<RandomArea setTotalState={(state) => this.setTotalState(state)} />
					<InputArea
						changeLat={(e) => this.changeLat(e)}
						changeLng={(e) => this.changeLng(e)}
						setTotalState={(state) => this.setTotalState(state)} />
				</Grid>
				<MyMap lat={this.state.lat} lng={this.state.lng} />
				<Location locData={this.state.locData} lat={this.state.lat} lng={this.state.lng} />
			</div>
		);
	}
}