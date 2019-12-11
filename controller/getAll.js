import dotenv from 'dotenv';
import User from '../model/User';
import Profile from '../model/Profile';

const getAll = async(req, res) => {
    try{
        const profiles = await Profile.find().populate('user', ['name', 'avatar'])
        if(!profiles){
            res.status(404).json({
                status:404,
                error:'profile not found'
            })
            return
        }
        res.status(200).json(
            profiles
        )
        return;
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default getAll;