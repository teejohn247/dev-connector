import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const delPost = async(req, res) => {
  {
    Post.findById(req.params.id)
      .then(post => {
        // Check for post owner
        if (post.user.toString() !== req.payload.id) {
          return res
            .status(401)
            .json({ notauthorized: 'User not authorized' });
        }

        // Delete
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
}  
}
export default delPost;

