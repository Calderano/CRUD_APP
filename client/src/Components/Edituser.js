import React from 'react'
import './Adduser.css'
import { useState,useEffect } from 'react'
import { getindiuser ,editUser} from '../service/Api'
import {useNavigate,useParams} from 'react-router-dom'
 const defaultvalue={
      name:'',
      username:'',
      email:'',
      phone:''
    }
const  Edituser = () => {
  const [user,setUser]=useState(defaultvalue);

  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    loadUserDetails();
  },[])

  const loadUserDetails=async()=>{
    const response=await getindiuser(id);
    setUser(response.data);
  }
  const onvaluechange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
     console.log(user);
    }
    const editUserDetails=async()=>{
      await editUser(user,id);
      navigate('/all');
    }
  return (
    <div className='adduser'>
    <h1>Edit User-</h1>
    <form >
      <label>Name:</label>
     <input onChange={(e)=>onvaluechange(e)} name="name" className='name' type="text" placeholder='Enter your Name' value={user.name}/>
     <br/>
     <label >UserName:</label>
     <input onChange={(e)=>onvaluechange(e)} name="username" className='username' type="text" placeholder='Enter your UserName' value={user.username}/>
     <br/>
      <label >Email-Id:</label>
     <input onChange={(e)=>onvaluechange(e)} name="email" className='email' type="email"  placeholder='Enter your Email-Id' value={user.email}/>
     <br/>
      <label >Contact No.:</label>
     <input onChange={(e)=>onvaluechange(e)} name="phone" className='contact' type="number" placeholder='Enter your Contact Number' value={user.phone}/>
     <br/>
     <button type="submit" onClick={()=>editUserDetails()}>Edit User</button>
    </form>
    </div>
  )
}

export default Edituser