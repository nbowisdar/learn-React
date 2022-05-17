import React from 'react'

export default function Select({default_val, arr, onChange1}) {
  console.log(arr)
  return (
    <select onChange={ (e) => onChange1(e) } >
      {
        arr.map( (item) => <option key={item} value={item}>{item}</option> )
      }
    </select>
  )
}
