import React from 'react'
import { useState } from 'react'
import { additionUser } from '../service/Api'
import { useNavigate } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
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
const Adduser = () => {
    const [user, setUser] = useState(defaultvalue);
    const { name, username, email, phone } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await additionUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User -</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}
export default Adduser;