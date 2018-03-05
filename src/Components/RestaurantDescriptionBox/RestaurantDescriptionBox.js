import React from 'react';
import classes from './RestaurantDescriptionBox.css'
import ExitButton from '../ExitButton/ExitButton'
	
const RestaurantDescriptionBox=(props)=>{
	return (
			<div>
			<ExitButton  clicked={props.modalClosed}/>
		<div className="thumbnail">
			<img className={classes.DescriptionBoxImage} src={props.restaurant.url}/>
			<div className={classes.Text}>
				<h1>{props.restaurant.name}</h1>
				<h2 className="lead">{props.restaurant.location}</h2>
				<blockquote><p>{props.restaurant.description}</p></blockquote>
			</div>
			<button onClick={props.modalClosed} className="btn btn-danger">ClickHere to Exit</button>
		</div>
		</div>
		);
}


export default RestaurantDescriptionBox;