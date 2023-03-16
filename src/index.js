import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/Context API/AuthContext';
import "@fontsource/roboto";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8F3E9"
    }, 
    secondary: {
      main: "#333"
    },
    third: {
      main: "#FCF9F3"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
