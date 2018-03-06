import React from 'react'
import {Link} from 'react-router-dom'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Restlist from '../../Components/RestList/Restlist'
import {restaurants} from '../../Variables/RestaurantsList/Restaurant'




class RestaurantSearch extends React.Component {

	state={
		searchfield:'',
		Restaurants:restaurants,
	}

	  onSearchHandler = (event) =>{
    this.setState({ searchfield:event.target.value  })
  }



	render(){

		const filteredList= restaurants.filter(restaurants=>{
	      return restaurants.name.toLowerCase().includes(this.state.searchfield.toLowerCase())||
	       restaurants.location.toLowerCase().includes(this.state.searchfield.toLowerCase())});

		return(
	        <div >
	          <h1 ><span className="i">i</span>Rest</h1>
	          <SearchBox searchChange={this.onSearchHandler}/>
	          <Restlist restaurants={filteredList} clicked={this.props.showDescription}/>
	        </div>
	        )
      }
	
}
      export default RestaurantSearch;