import React from 'react'
import { useState,useEffect } from 'react'
import { getindiuser ,editUser} from '../service/Api'
import {useNavigate,useParams} from 'react-router-dom'
import {FormGroup,FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
 const defaultvalue={
      name:'',
      username:'',
      email:'',
      phone:''
    }
    const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const  Edituser = () => {
  const [user,setUser]=useState(defaultvalue);
  const { name, username, email, phone } = user;
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    loadUserDetails();
  },[])

  const loadUserDetails=async()=>{
    const response=await getindiuser(id);
    setUser(response.data);
  }
  const onValueChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
     console.log(user);
    }
    const editUserDetails=async()=>{
      await editUser(user,id);
      navigate('/all');
    }
  return (
     <Container>
            <Typography variant="h4">Edit User -</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
  )
}

export default Edituser