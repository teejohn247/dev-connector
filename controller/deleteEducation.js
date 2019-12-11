import dotenv from 'dotenv';
import User from '../model/User';
import Profile from '../model/Profile';

const deleteEducation = async(req, res) => {
    {
        Profile.findOne({ user: req.payload.id })
          .then(profile => {
            // Get remove index
            const removeIndex = profile.education
              .map(item => item.id)
              .indexOf(req.params.exp_id);
    
            // Splice out of array
            profile.education.splice(removeIndex, 1);
    
            // Save
            profile.save().then(profile => res.json(profile));
          })
          .catch(err => res.status(404).json(err));
      }
}
export default deleteEducation;