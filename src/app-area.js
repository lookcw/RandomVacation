import React from 'react';
import RandomArea from './random-area';
import InputArea from './input-area';
import Location from './location'
import MyMap from './map'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Disclaimer from './disclaimer'
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
						<Typography variant="h3" color="tertiary">
							Random Vacation Picker
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid className="colcentered">
					<Row>
						<Col md={5}><Typography variant="h2"> Choose a Vacation Spot</Typography></Col>
						<Col md={2}><Typography variant="h2"> OR</Typography></Col>
						<Col md={5}> <Typography variant="h2"> Input a Location</Typography> </Col>
					</Row>
					<Row>
						<Col md={5}>
							<RandomArea setTotalState={(state) => this.setTotalState(state)} />
						</Col>
						<Col md={2}></Col>
						<Col md={5}>
							<InputArea
								changeLat={(e) => this.changeLat(e)}
								changeLng={(e) => this.changeLng(e)}
								setTotalState={(state) => this.setTotalState(state)} 
							/>
						</Col>
					</Row>
					<MyMap lat={this.state.lat} lng={this.state.lng} />
					<Location locData={this.state.locData} lat={this.state.lat} lng={this.state.lng} />
				</Grid>
			</div>
		);
	}
}