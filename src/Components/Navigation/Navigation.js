import React from 'react'
import LogoiRest from '../Logo/Logo'
import classes from './Navigation.css'
import './Navigation.css'


const Navigation =({onRouteChange,isLoggedIn})=>{

	let signInStatus=<ul className="nav navbar-nav navbar-right">
			            <li><a onClick={()=>onRouteChange("signin")} className={classes.Navigation}>Sign in</a></li>
			            <li><a onClick={()=>onRouteChange("signup")} className={classes.Navigation}>Sign up</a></li>
			          </ul>;
	let brand= <a onClick={()=>onRouteChange("signin")}>iRest</a>;

	if (isLoggedIn){
		signInStatus= <ul className="nav navbar-nav navbar-right">
			            <li><a onClick={()=>onRouteChange("Signout")} className={classes.Navigation}>Sign out</a></li>
			          </ul>;
		brand= <a onClick={()=>onRouteChange("home")}>iRest</a>;
	}

		return (
		    <nav className="navbar navbar-default ">
			  <div className="container">
			  
			    <div className="navbar-header ">

			      <a className="navbar-brand" href="#">{brand}</a>
			    </div>

			    
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    	<div className={classes.NavList}>
				      <ul className="nav navbar-nav ">
				        <li><a href="/AboutUs" >About Us <span className="sr-only">(current)</span></a></li>
				        <li><a href="/Contact" >Contact</a></li>
				      </ul>
			     	</div>
			      <ul className="nav navbar-nav navbar-right">
			        {signInStatus}
			        <ul className="dropdown-menu">
			            {signInStatus}
			          </ul>
			        
			      </ul>
			    </div>
			  </div>
			</nav>

			 
		);
	
}


export default Navigation


