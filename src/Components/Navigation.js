import React from 'react'
import LogoiRest from './Logo/Logo'
import classes from './Navigation/Navigation.css'


const Navigation =({onRouteChange,isLoggedIn})=>{

		return (
		    <nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container" >
				     
		        <div className="navbar-header " >
			       		 <a className="navbar-brand">
		       		 		<LogoiRest/>
				     	 </a>
				        {isLoggedIn===true?
				          <a className="navbar-brand pointer" onClick={()=>onRouteChange("home")}>iRest</a>
				          :
				          <a className="navbar-brand pointer" onClick={()=>onRouteChange("signin")}>iRest</a>
				        }
		        </div>
			        <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
			        {isLoggedIn===true?
			          <ul className="nav navbar-nav navbar-right">
			            <li><a onClick={()=>onRouteChange("Signout")} className={classes.Navigation}>Sign out</a></li>
			          </ul>
			          :
			          <ul className="nav navbar-nav navbar-right">
			            <li><a onClick={()=>onRouteChange("signin")} className={classes.Navigation}>Sign in</a></li>
			            <li><a onClick={()=>onRouteChange("signup")} className={classes.Navigation}>Sign up</a></li>
			          </ul>}
			        </div>
		      </div>
		    </nav>

			 
		);
	
}


export default Navigation


