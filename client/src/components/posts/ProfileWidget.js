import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileWidget = ({profile}) => {
    return (
        
        <div class="frnds">
          <Link to ={`/post/${profile.user._id}`}>
            <img
             class="profile-photo"
              src={profile.user.avatar}
              alt=""
            />
          </Link>
          <div class='blo' style={{display:'block', lineHeight:'2px',marginTop:'-10px',textAlign:'left', fontSize:'13px'}}>
        <h4 style={{color:'#212529',fontSize:'13px',paddingLeft:'20px'}}>{profile.user.name}</h4>
        <p style={{paddingLeft:'20px'}}>{profile.company}</p>
        </div>


        </div>
    )
        }

ProfileWidget.PropTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileWidget;