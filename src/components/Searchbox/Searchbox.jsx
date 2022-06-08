import React from 'react';
import './Searchbox.css'


function Searchbar({ oninputchange }) {
    return (
        <div className='search-box'>
            <input type="text" name="search" className='search' placeholder='Type your name here' onChange={(event) => { oninputchange(event.target.value) }}></input>

        </div>
    )
}

export default Searchbar