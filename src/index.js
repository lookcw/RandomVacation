import React from 'react';
import ReactDOM from 'react-dom';
import AppArea from './app-area';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    tertiary: { main: '#' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  overrides: {
    MuiButton: {
      root: {
        margin:"20px",
        padding:"15px 10px",
      }
    },
    MuiInputLabel: {
      filled: {
        transform:"translate(10px,20px) scale(1)",
        fontSize: "10pt",
      },
      animated: {
        paddingBottom:"20px",
      },

    },
    MuiInputBase: {
      input: {
        fontSize: "12pt",
        padding:"px",
      },
    },
    // MuiFilledInput: {
    //   input: {
    //     padding: "10px"
    //   },
    // },
    // MuiFormControl: {
    //   root: {
    //     marginTop:"20px",
    //     marginBottom:"20px",
    //   }
    // }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppArea />
  </MuiThemeProvider>,
  document.getElementById('root')
);