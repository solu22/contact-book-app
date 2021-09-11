import React from 'react'

const Search = ({value, onChange}) => {
    return (
        <>
         <input
            type="text"
            placeholder="enter name to search"
            style={{ padding: "10px", borderRadius: "10px", border: "none" }}
            value = {value}
            onChange = {onChange}
          />
            
        </>
    )
}

export default Search
