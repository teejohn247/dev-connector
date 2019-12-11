import React from 'react';
import {Link} from 'react-router-dom';

const DashboardActions = () => {
    return(
       <div className= 'dash-buttons'>
       <Link to='/edit-profile'><span  className='btn btn-light'>
       Edit Profile
       </span>
       </Link>
       <Link to='/add-experience'><span  className='btn btn-light'>
       Add experience
       </span>
       </Link>
       <Link to='/add-education'><span  className='btn btn-light'>
       Add Education
       </span>
       </Link>
       </div>
    )
}
export default DashboardActions;