import React from 'react'
import './Adduser.css'
import { useState } from 'react'
import { additionUser } from '../service/Api'
import {useNavigate} from 'react-router-dom'
 const defaultvalue={
      name:'',
      username:'',
      email:'',
      phone:''
    }
const  Adduser = () => {
  
  const [user,setUser]=useState(defaultvalue);
  
  const onvaluechange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  }
    const addUserDetails=async()=>{
      await additionUser(user);
    }
  return (
    <div className='adduser'>
    <h1>Add a User -</h1>
    <form >
      <label>Name:</label>
     <input onChange={(e)=>onvaluechange(e)} name="name" className='name' type="text" placeholder='Enter your Name'/>
     <br/>
     <label >UserName:</label>
     <input onChange={(e)=>onvaluechange(e)} name="username" className='username' type="text" placeholder='Enter your UserName'/>
     <br/>
      <label >Email-Id:</label>
     <input onChange={(e)=>onvaluechange(e)} name="email" className='email' type="email"  placeholder='Enter your Email-Id'/>
     <br/>
      <label >Contact No.:</label>
     <input onChange={(e)=>onvaluechange(e)} name="phone" className='contact' type="number" placeholder='Enter your Contact Number'/>
     <br/>
     <button type="submit" onClick={()=>addUserDetails()} >Add User</button>
    </form>
    </div>
  )
}

export default Adduser