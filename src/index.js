import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Containers/App/App.js';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component ={App}/>;
			<Route path="/AboutUs" component ={AboutUs}/>;
			<Route path="/Contact" component ={Contact}/>;
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
