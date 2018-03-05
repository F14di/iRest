import React from 'react';
import classes from './RestaurantImage.css'


const RestaurantImage=(props)=>(
	<img alt="image1" src={props.image} className={classes.RestaurantImage}/>
)


export default RestaurantImage;