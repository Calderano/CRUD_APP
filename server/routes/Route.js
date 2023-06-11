import express,{Router} from 'express';
import {addingUser,getUser,getSingleUser,editUser,deletingUser} from '../controller/user-controller.js';
const router=express.Router();

router.post('/add',addingUser);
router.get('/all',getUser);
router.get('/:id',getSingleUser);
router.put('/:id',editUser);
router.delete('/:id',deletingUser);

export default router;