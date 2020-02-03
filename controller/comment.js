import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const comment = async(req, res) => {
    try{
       const user = await User.findById(req.payload.id).select('-password')
      
    Post.findById(req.params.post_id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: req.payload.id
        };

        // Add to comments array
        post.comments.unshift(newComment);

        // Save
        post.save().then(post => res.json(post.comments));
      })
    } catch(err) {
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default comment;