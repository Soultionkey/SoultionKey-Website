import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import "../../solution-key/node_modules/video-react/dist/video-react.css";
import '../../solution-key/node_modules/react-modal-video/scss/modal-video.scss';
ReactDOM.render(   
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
localStorage.setItem('lunch','ceral')
console.log(localStorage.getItem('lunch'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
