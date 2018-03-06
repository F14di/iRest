import React, {Component} from 'react'
import Place from './Place/Place'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import Modal from '../Modal/Modal'
import RestaurantDescriptionBox from '../RestaurantDescriptionBox/RestaurantDescriptionBox'
import classes from './RestList.css'
import AddRestaurant from './AddRestaurant/AddRestaurant'


class Restlist extends Component{

	state={
		restaurantObject:{},
		RestaurantInfoActive:false,
		applyBackDrop:false

	}

	showDescriptionBox=(index)=>{
   	 this.setState({restaurantObject:index,RestaurantInfoActive:true })
	}

	newRestaurantForm=()=>{
		alert('add New Restaurant Form ')
	}


	hideDescriptionBox=()=>{
		this.setState({RestaurantInfoActive:false})
	}

	


	render(){

			const RestComponent = this.props.restaurants.map((restaurant, i)=>{
	return (
		<Place key={i}
		id={this.props.restaurants[i].id}
		name={this.props.restaurants[i].name} 
		location={this.props.restaurants[i].location} 
		image={this.props.restaurants[i].url}
		showDescription={this.props.clicked}
		windowPop={()=>this.showDescriptionBox(this.props.restaurants[i])}
		/>
		);
	})


	RestComponent.push(
		<AddRestaurant
		id="FaPlusCircle"
		name="Add a Restaurant"
		icon={FaPlusCircle}
		key="addNewRestaurant"
		newRestaurantForm={()=>this.newRestaurantForm}
		/>
	)
		return(
		<div className={classes.RestList}>
			<Modal show={this.state.RestaurantInfoActive} modalClosed={this.hideDescriptionBox}>
	          <RestaurantDescriptionBox restaurant={this.state.restaurantObject} modalClosed={this.hideDescriptionBox}/>
	        </Modal>
	        	<div className="row">
					{RestComponent}
				</div>
		</div>
		);
	}




}

export default Restlist