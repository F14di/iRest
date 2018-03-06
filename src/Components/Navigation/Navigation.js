import React from 'react'
import LogoiRest from '../Logo/Logo'
import classes from './Navigation.css'
import './Navigation.css'
import {Link} from 'react-router-dom'


const Navigation =({onRouteChange,isLoggedIn})=>{


	let signInStatus=<ul className="nav navbar-nav navbar-right">
			           <li><Link to="/Signin">Login</Link></li>
			           <li><Link to="Signup">Sign up</Link></li>
			          </ul>;

	if (isLoggedIn){
		signInStatus= <ul className="nav navbar-nav navbar-right">
			            <li><Link to="Signin">Sign out</Link></li>
			          </ul>;
	}

		return (
		    <nav className="navbar navbar-default ">
		    <div className={classes.Navs}>
			  <div className="container">
			  
			    <div className="navbar-header ">

			      <Link to="/"><a className="navbar-brand"><brand>iRest</brand></a></Link>
			    </div>

			    
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    	<div className={classes.NavList}>
				      <ul className="nav navbar-nav ">
					      <li><Link to="/">RestSearch</Link></li>
					      <li><Link to="AboutUs">About Us</Link></li>
					      <li><Link to="Contact">Contact</Link></li>
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
			  </div>
			</nav>

			 
		);
	
}


export default Navigation


