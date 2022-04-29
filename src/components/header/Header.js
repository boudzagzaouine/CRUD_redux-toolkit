import React from 'react'
import { useSelector } from 'react-redux';
import "./Header.css";
function Header() {
const {name,email}=useSelector(state=>state.user)
  return (
      <div className='header'>
      <h1>redux toolkit</h1>
      <p>hello {email!='' && name}</p>
      </div>
  )
}

export default Header