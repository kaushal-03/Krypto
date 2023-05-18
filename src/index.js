import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';
import Login from './components/Login';
import {ChakraProvider , theme} from "@chakra-ui/react";
import { Reroute } from './Reroute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
    <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>
    </Provider>
);
export const server = `https://api.coingecko.com/api/v3`

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

