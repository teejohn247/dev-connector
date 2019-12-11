import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const getPost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json({
                status:404,
                error:'no post available'
            })
        }
        res.status(200).json(
            post
        )
        console.log(post)
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default getPost;