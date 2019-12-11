import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

const deleteComment = async(req, res) => {
    {
        Post.findById(req.params.id)
          .then(post => {
            // Check to see if comment exists
            if (
              post.comments.filter(
                comment => comment._id.toString() === req.params.comment_id
              ).length === 0
            ) {
              return res
                .status(404)
                .json({ commentnotexists: 'Comment does not exist' });
            }
    
            // Get remove index
            const removeIndex = post.comments
              .map(item => item._id.toString())
              .indexOf(req.params.comment_id);
    
            // Splice comment out of array
            post.comments.splice(removeIndex, 1);
    
            post.save().then(post => res.json(post));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      }
}
export default deleteComment;