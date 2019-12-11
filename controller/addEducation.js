import dotenv from 'dotenv';
import User from '../model/User';
import Profile from '../model/Profile';

const education = async(req, res) => {
    try{
        const profile = await Profile.findOne({user: req.payload.id})
        if(!profile){
            res.status(404).json({
                status:404,
                error:'profile not found'
            })
            return;
        }
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
          };
          profile.education.unshift(newEdu);
          profile.save().then(profile =>  res.status(200).json(
            profile
        ));
return;
       
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default education;