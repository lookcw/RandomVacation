import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppArea from './app-area';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  button: {

  }
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
	<AppArea />
  	</MuiThemeProvider>,
	document.getElementById('root')
);