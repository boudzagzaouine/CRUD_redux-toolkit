import React, { useEffect, useState } from 'react'
import "./Form.css"
import { useDispatch } from 'react-redux';
import { adduser } from '../../redux/UserSlice';
import Info from './../Info';

function Form() {
   const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const dispatch = useDispatch()
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const submitRef = React.useRef();
useEffect(() => {
        nameRef.current.focus();
    }, []);

  const onfirstinputkey = (e) => {
    if(e.key==='Enter'){  emailRef.current.focus();}
  }
   const onlastinputkey = (e) => {
    if(e.key==='Enter'){  submitRef.current.focus();}
  }
     const handlename = (e) => {
    setname(e.target.value)
    }
      const handleemail = (e) => {
    setemail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
dispatch(adduser({name,email}))
  }
  return (

  
      <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <input ref={nameRef} onKeyDown={onfirstinputkey} type="text" placeholder='enter name' onChange={handlename}/>
          </div>
          <div className='form-group'>
           <input ref={emailRef} onKeyDown={onlastinputkey} type="email" placeholder='enter email' onChange={handleemail}/>
          </div>
        <div className='form-group'>
           <input ref={submitRef} type="submit" placeholder='add user'/>
      </div>
    <Info/>
      </form>
     
          
        
        
  )
}

export default Form