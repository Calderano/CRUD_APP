import axios from 'axios';

const Url='http://localhost:4000'; 

export const additionUser = async (user) => {
    try{
    return await axios.post(`${Url}/add`, user);
    } catch(error){
        console.log(error);
    }
}

export const getUsers = async () => {
    try{
    return await axios.get(`${Url}/all`);
    } catch(error){
        console.log(error);
    }
}
export const getindiuser = async (id) => {
    try{
    return await axios.get(`${Url}/${id}`);
    } catch(error){
        console.log(error);
    }
    
}
export const editUser = async (user,id) => {
    try{
    return await axios.put(`${Url}/${id}`, user);
    } catch(error){
        console.log(error);
    }
}

export const deleteSingleUser = async (id) => {
    try{
    return await axios.delete(`${Url}/${id}`);
    } catch(error){
        console.log(error);
    }
}
