import dotenv from 'dotenv';
import User from '../model/User';
import Profile from '../model/Profile';

const deleteProfile = async(req, res) => {
    try{
        await Profile.findOneAndRemove({user:req.payload.id});
        await User.findOneAndRemove({ _id: req.payload.id});
        
        res.status(200).json({
            status:200,
            msg:'Account deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default deleteProfile;