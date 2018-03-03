import React from 'react';
import classes from './ExitButton.css'



const ExitButton=(props)=>(
	<button onClick={props.clicked} type="button" className={classes.ExitButton} aria-label="Close"><span aria-hidden="true">&times;</span></button>
);



	export default ExitButton;



	