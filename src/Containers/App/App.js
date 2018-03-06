import React , {Component} from 'react'
import Signin from '../../Components/Signin/Signin'
import Signup from '../../Components/Signup/Signup'
import Navigation from '../../Components/Navigation/Navigation'
import classes from './App.css'
import LandingPhoto from '../../Components/LandingPhoto/LandingPhoto'
import RestaurantSearch from '../../Components/RestaurantSearch/RestaurantSearch'
import {Route, Switch} from 'react-router-dom'
import Layout from '../../UI/Layout/Layout'

class App extends Component{
 
    state={
    route:"home",
    isLoggedIn:true,
    user:{
      id:'',
      email:'',
      name:'',
      entries:0,
      joined:''
    }
  }

  loadUser =(data)=>{
    this.setState({user:{
      id:data.id,
      email:data.email,
      name:data.name,
      entries:data.entries,
      joined:data.joined
    }})
  }


  onSearchHandler = (event) =>{
    this.setState({ searchfield:event.target.value  })

  }

  hideRestaurantDescription=()=>{
    this.setState({RestaurantInfoActive:false})
  }

  onRouteChange =(route)=>{
    if(route==='Signout'){
      this.setState({isLoggedIn: false})
    }else if(route==='home'){
      this.setState({isLoggedIn:true})
    }
    this.setState({route:route});
  }



  render(){
    const {isLoggedIn, route, restaurants, searchfield}=this.state;

    

    return(   
        <div className="App">
          
          <Layout>
          <div  className={classes.App}>
          
          </div>
          </Layout>
      </div>
    );
  }
}
  

export default App;