import React from 'react';
import classes from './Place.css'
import RestaurantImage from '../RestaurantImage/RestaurantImage'

const Place=(props)=>{
	

	return (
		<div className=" col-lg-3 col-md-4 col-sm-6 col-xs-10">
			<div className={classes.Place} onClick={()=>props.windowPop(this)}>
				<RestaurantImage image={props.image}/>
					<div className="tc pa2">
						<h2>{props.name}</h2>
						<p>{props.location} </p>
					</div>
			</div>
		</div>
	);


}




export default Place