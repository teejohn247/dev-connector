import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfileById } from '../../actions/profile';


const ProfileAbout = ({profile:{bio, skills, user:{name}}}) => {
    return(
        <div class="profile-about bg-light p-2">
        {bio && ( <Fragment>
          <h2 class="text-primary">{name.trim().split(' ')}s Bio</h2>
          <p>{bio}</p>
          <div class="line" />
          </Fragment>
        )}
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
           {skills.map((skill,index) => (
               <div key ={index} className="p-1">
               <i className="fas fa-check"></i>{skill}
               </div>
           ))}
          </div>
        </div>
    )
           }


ProfileAbout.PropTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;