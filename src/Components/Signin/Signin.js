import React from 'react'
import classes from './Signin.css'
import {Link} from 'react-router-dom'


class Signin extends React.Component{

	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:''
		}
	}

	onEmailChange=(event)=>{
		this.setState({signInEmail:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({signInPassword:event.target.value});
	}

	onSubmitSignIn=(e)=>{
		e.preventDefault();
		this.props.onRouteChange("home")

	}


	render(){
		const {onRouteChange}= this.props;
	return(
		<div className={classes.loginForm}>
			<form className="form-horizontal">
				<div className="thumbnail">
					<div className="row ">
					  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
					    <label className="col-sm-2 control-label">Email</label>
					    <div className="col-sm-10">
					      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
					    </div>
					  </div>
					</div>
				 
				 <div className="row">
					  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
					    <label className="col-sm-2 control-label" >Password</label>
					    <div className="col-sm-10">
					      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
					    </div>
					  </div>
				  </div>

				  <div className="form-inline ">
					  <div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10 col-lg-3">
					    	<Link to="/"><input 
					    	className="btn btn-sm btn-success" 
					    	type="submit" 
					    	value="Login"/></Link>
					    </div>
					   </div>
					   <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10 col-lg-3 text-success">
						       <Link to="Signup"><button 
						        className="btn btn-sm btn-default" >
						       <span className={classes.signUp}>Sign up</span></button></Link>
					  	 	</div>
				    	</div>
					</div>
				</div>
			</form>
		</div>



		);
	}
}




export default Signin