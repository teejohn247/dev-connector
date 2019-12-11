import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const getPosts = async(req, res) => {
    try{
        const posts = await Post.find().sort({date: -1 })
        if(!posts){
            res.status(404).json({
                status:404,
                error:'no post available'
            })
        }
        res.status(200).json(
            posts
        )
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default getPosts;