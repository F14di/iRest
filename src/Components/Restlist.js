import React, {Component} from 'react'
import Place from './Place'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import Modal from './Modal/Modal'
import RestaurantDescriptionBox from './RestaurantDescriptionBox'
import classes from './RestList/RestList.css'


class Restlist extends Component{

	state={
		restaurantObject:{},
		RestaurantInfoActive:false,
		applyBackDrop:false

	}

	showDescriptionBox=(index)=>{
   	 this.setState({restaurantObject:index,RestaurantInfoActive:true })
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
		<div  key={1000} className="pointer  alert w-100 measure-narrow dib bw0  ma3 grow  br3 shadow-4 ">
			<FaPlusCircle alt="addIcon" width="115" height="135"/>
				<div className="tc pa2">
					<h2>New</h2>
					<p>Restaurant</p>
				</div>
		</div>
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