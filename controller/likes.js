import dotenv from 'dotenv';
import User from '../model/User';
import Post from '../model/Post';

dotenv.config();

 const post = async(req,res) => {
    {
            Post.findById(req.params.post_id)
            .then(post => {
              if (
                post.likes.some(like => like.user.toString() === req.payload.id)
              ) {
                return res
                  .status(400)
                  .json({ alreadyliked: 'User already liked this post' });
              }
    
              // Add user id to likes array
              post.likes.unshift({ user: req.payload.id });
    
              post.save().then(post => res.json(post.likes));
            })
            .catch(err => res.status(500).json({ postnotfound: 'No post found' }));
      }
    }

export default post;

// try{
//     const post = await Post.findById(req.params.post_id);
//     const check = post.likes.some(pos => pos.user == req.payload.id);
//     console.log(check)
//     if(check){
//               res.status(404).json({
//                   status:404,
//                   error:'Post has been liked already'
//               })
//               return;
//           }
// post.likes.unshift({user: req.payload.id});
// post.save().then(post => res.json(post));
// }
//   catch(err){
//     res.status(500).json({
//         status:500,
//          err:'server error'
//      })
//  }
// }