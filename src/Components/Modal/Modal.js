import React, {Component} from 'react';
import Aux from '../hoc/AuxF';
import BackDrop from '../Backdrop/BackDrop'
import classes from './Modal.css';

class Modal extends Component{
	render(){
		return(
				<Aux>
					<BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
					<div className={classes.Modal} 
						style={{transform:this.props.show? 'translateY(0)':'translateY(-100vh)', 
																	opacity:this.props.show? '1':'0'}}>
						{this.props.children}
					</div>
				</Aux>
			);
	};
		
};



export default Modal;