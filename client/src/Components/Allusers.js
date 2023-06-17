import React, { Component } from 'react'
import { getUsers,deleteSingleUser } from '../service/Api'
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const Allusers = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
   getAllUsers();
  },[])

  const getAllUsers=async()=>{
    let allData=await getUsers();
    setUsers(allData.data);
  }
  const deleteUser=async(id)=>{
  await deleteSingleUser(id);
  getAllUsers();
  } 
 
    return (
        <StyledTable>
            <TableHead>
                <THead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
         <TableCell>Phone</TableCell>
         <TableCell></TableCell>
    </THead>
</TableHead>
<TableBody>
    {users.map((user) => (
        <TRow>
             <TableCell>{user._id}</TableCell>
             <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
               <TableCell>
 <Button color='info' variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
    <Button color="error" variant="contained" onClick={()=>deleteUser(user._id)} >Delete</Button>
      </TableCell>
        </TRow>
            ))}
            </TableBody>
        </StyledTable> 
    )
}
export default Allusers