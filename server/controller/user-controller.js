
import User from '../model/userSchemaaa.js'

export const addingUser=async(req,res)=>{
    const user=req.body;
    const newUser=new User(user);

    try{
      await newUser.save();
      res.status(200).json(newUser);
    }catch(err){
       res.status(400).json({message:err.message});
    }
}

export const getUser=async(req,res)=>{
   
    try{
     const allUsers=await User.find({});
      res.status(200).json(allUsers);
    }catch(err){
       res.status(400).json({message:err.message});
    }
}
export const getSingleUser=async(req,res)=>{
    try{
     const singleUser=await User.findById(req.params.id);
      res.status(200).json(singleUser);
    }catch(err){
       res.status(400).json({message:err.message});
    }
}

export const editUser=async(req,res)=>{
  const user=req.body;
  const editUser=new User(user);
  try{
    await User.updateOne({_id:req.params.id},editUser);
    res.status(200).json(editUser); 
  }catch(err){
    res.status(400).json({message:err.message});
  }
}

export const deletingUser=async(req,res)=>{
  try{
    await User.deleteOne({_id:req.params.id});
    res.status(200).json({message:'User deleted'});
  }catch(err){
    res.status(400).json({message:err.message});
  }
}