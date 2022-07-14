import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col'>
        <input
            className="form-control"
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder="type to Search..."
        />
    </div>
  )
}

export default SearchBox;