import React from 'react'
import FaSearch from 'react-icons/lib/fa/search'


const SearchBox=({searchfield, searchChange})=>{
	return(
			  <div >
				<a data-hack-search-button-label="true" >
					<input 
					type="search"
					placeholder="Search iRest"
					onChange={searchChange}/>
					<FaSearch className="tc" width="20" height="20"/>
				</a>
			</div>
		);
}



export default SearchBox