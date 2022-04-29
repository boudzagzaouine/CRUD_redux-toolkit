import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
function Sidebar() {
    const {name,email}=useSelector(state=>state.user)
  return (
      <div className='sidebar'>
          <ul>
              <li>  <a href='#'>home</a></li>
              <li><a href='#'>contact</a></li>
              <li> <a href='#'>Blog</a></li>
              <li> <a href='#'>Contact</a></li>
              <li> <a href='#'>hello {email!='' && name}</a></li>
          </ul>
      </div>
  )
}

export default Sidebar