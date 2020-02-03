import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const unlike = async(req, res) => {
    Post.findById(req.params.id)
            .then(post => {
              
              if (
                post.likes.filter(like => like.user.toString() === req.payload.id)
                  .length === 0
              ) {
                return res
                  .status(400)
                  .json({ notliked: 'You have not yet liked this post' });
              }
        // Get remove index
        const removeIndex = post.likes
        .map(item => item.user.toString())
        .indexOf(req.payload.id);

      // Splice out of array
      post.likes.splice(removeIndex, 1);

      // Save
      post.save().then(post => res.json(post.likes));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
};
    

      
export default unlike;