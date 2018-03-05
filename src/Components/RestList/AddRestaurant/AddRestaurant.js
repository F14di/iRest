import React from 'react';
import classes from '../Place/Place.css'
import Imageclasses from '../RestaurantImage/RestaurantImage.css'
import RestaurantImage from '../RestaurantImage/RestaurantImage'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


const AddRestaurant=(props)=>{
	

	return (
		<div className=" col-lg-3 col-md-4 col-sm-6 col-xs-10">
			<div className={classes.Place} onClick={props.newRestaurantForm()}>
		
				
					<FaPlusCircle alt="image1" style={{color:"green",width:"50%", height:"auto", margin:"20px"}}/>
					<div >
						<h2 style={{margin:"auto 10px"}}>{props.name}</h2>
					</div>
		
		</div>
		</div>
	);


}




export default AddRestaurant