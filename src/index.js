import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/roboto"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { Provider as ReduxProvider } from 'react-redux';
import store from './Store'

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
