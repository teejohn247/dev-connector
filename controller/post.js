import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

dotenv.config();

 const post = async(req,res) => {
try{
const user = await User.findById( req.payload.id).select('-password')
new Post({
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.payload.id
}).save().then(post => res.json(post));
}
  catch(err){
    res.status(500).json({
        status:500,
         err:'server error'
     })
 }
}
export default post;