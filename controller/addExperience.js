import dotenv from 'dotenv';
import User from '../model/User';
import Profile from '../model/Profile';

const experience = async(req, res) => {
    try{
        const profile = await Profile.findOne({user: req.payload.id})
        if(!profile){
            res.status(404).json({
                status:404,
                error:'profile not found'
            })
            return;
        }
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
          };

          profile.experience.unshift(newExp);
          profile.save().then(profile =>  res.status(200).json(
            profile
        ));

       
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default experience;