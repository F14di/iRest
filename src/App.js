import React , {Component} from 'react'
import {restaurants} from './Components/Restaurant'
import Restlist from './Components/Restlist'
import SearchBox from './Components/SearchBox'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Navigation from './Components/Navigation'
import classes from './App.css'



class App extends Component{
  constructor(){
    super();
    this.state={
    restaurants:restaurants,
    searchfield:'',
    route:"home",
    isLoggedIn:true,
    user:{
      id:'',
      email:'',
      name:'',
      entries:0,
      joined:''
    },
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

    const filteredList= restaurants.filter(restaurants=>{
      return restaurants.name.toLowerCase().includes(searchfield.toLowerCase())||
       restaurants.location.toLowerCase().includes(searchfield.toLowerCase())});

    return(   
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isLoggedIn}/>
          <div  className={classes.App}>
          {route==='home'?
            <div className="tc">
              <h1 className="tc code b"><span className="i">i</span>Rest</h1>
              <SearchBox searchChange={this.onSearchHandler}/>
              <Restlist restaurants={filteredList} clicked={this.props.showDescription}/>
            </div>
            :(
              route==='signup'?
              <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
          }
          </div>
      </div>
    );
  }
}
  

export default App;