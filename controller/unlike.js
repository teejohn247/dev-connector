import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const unlike = async(req, res) => {
    try{
       const post = await Post.findById(req.params.id);
       if(!post){
        res.status(404).json({
            status:404,
            error:'post not found'
        })
        return;
    }
    const check = post.likes.some(like => like.user == req.payload.id);
    if(!check){
              res.status(404).json({
                  status:404,
                  error:'you cant unlike a post u havent liked' 
              })
        return;
          }
       
          await Post.update({"_id": req.params.id}, { 
            $pull: {"likes": {"user": req.payload.id}}
          })   

        res.status(200).json({
            msg: 'deleted'
         })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default unlike;