import React from 'react'
import { useSelector } from 'react-redux';
import "./Info.css"

function Info() {
    const {name,email}=useSelector(state=>state.user)
  return (
      <div className='info'>
          <div>name : {email!='' && name}</div>
          <div>email : {email!='' && email}</div>
      </div>
  )
}

export default Info