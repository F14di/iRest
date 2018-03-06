import React from 'react'
import {Link} from 'react-router-dom'



class Signup extends React.Component {


	constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
			name:''
		}
	}

	onEmailChange=(event)=>{
		this.setState({email:event.target.value});
	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value});
	}


	onSubmitSignUp=()=>{
		fetch("http://localhost:3000/register",{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				name:this.state.name
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user){
				console.log("registered")
				this.props.loadUser(user);
				this.props.onRouteChange("home")
			}
		})

	}

	render(){
	return(

		<main className="pa4 black-80 ">
		  <form className="shadow-4 measure center thumbnail pa4">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className=" f2 fw6 ph0 mh0">Sign Up</legend>
		      <div className="mt3">
		        <input className=" br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="text" 
		        name="name"  
		        id="name" 
		        placeholder="Name"
		        onChange={this.onNameChange}/>
		      </div>
		      <div className="mt3">
		        <input className=" br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address"  
		        id="email-address" placeholder="Email"
		         onChange={this.onEmailChange}/>
		      </div>
		      <div className="mv3">
		        <input className=" br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password" 
		        name="password"  
		        id="password" placeholder="Password"
		         onChange={this.onPasswordChange}/>
		      </div>
		    </fieldset>
		    <div className="">
		        <Link to="/"><input
		         type="submit" 
		     value="Done"/></Link>

		    </div>
		  </form>
		</main>


		);
	}

}




export default Signup