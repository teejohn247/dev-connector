import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../model/User';
import utils from '../config/utils';

dotenv.config();

const signin = async(req, res) => {
    const{email, password} = req.body
 try{
     const user = await User.findOne({email});
     if(!user){
         res.status(404).json({
             status: 404,
             error: 'user not found'
         })
     }
     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch){
        res.status(404).json({
            status: 404,
            error: 'Invalid login credentials'
        })
     }
     const token = utils.encodeToken( user.id, user.name );
     res.status(200).json({
         token,
         user
     })
 }catch(err){
     res.status(500).json({
         status:500,
         err:'server error'
     })
 }
}
export default signin;