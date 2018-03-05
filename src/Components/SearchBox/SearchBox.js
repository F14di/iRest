import React from 'react'
import FaSearch from 'react-icons/lib/fa/search'
import'./SearchBox.css'


const SearchBox=({searchfield, searchChange})=>{
	return(
			  <div>
					<input type="text" placeholder="Search iRest" onChange={searchChange}/>
					<i><FaSearch width="22" height="22"/></i>
			</div>
		);
}



export default SearchBox