import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Containers/App/App.js';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
import Layout from './UI/Layout/Layout'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import RestaurantSearch from './Components/RestaurantSearch/RestaurantSearch'


ReactDOM.render(
	<BrowserRouter>
				<div>
					<Route path="/"  component={Layout}> </Route>
		            <Route path="/AboutUs"  component ={AboutUs}/>
		            <Route path="/" exact component={RestaurantSearch}/>
		            <Route path="/Signup"   component ={Signup}></Route>
		            <Route path="/Contact"  component ={Contact}></Route>
		            <Route path="/Signin"  component ={Signin}></Route>
		           
				</div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
