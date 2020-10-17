import React, { useEffect, useRef, useState } from 'react'
import { search } from '../services/api-client'

// const useSearch = () => {
//   return [value, onChange]
//   const intervalId = useRef()

//   const onChange = e => {
//     setValue(e.target.value)
//   }
// }

const SearchBar = () => {
  const [value, setValue] = useState('')
  const intervalId = useRef()

  const handleChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    window.clearTimeout()

    if (value.length <= 3) {
      return
    }
    intervalId.current = window.setTimeout(() => {
      search(value)
    }, 2000)
  }, [value])

  // const SearchBar = () => {
  //   const [value, onCHange] = useSearch()
  // 

  return (
    <div className="SearchBar">
      <input
        type="test"
        className="form-control"
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
    </div>
  )
//}
}

export default SearchBar
