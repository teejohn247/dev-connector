import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import PropTypes from 'prop-types';


const ProfileExperience = ({experience:{company, title, location, getCurrentProfile, to, from, description}}) => {
    return(
        <div class="profile-exp bg-white p-2">
          <div>
            <h3 class="text-dark">{company}</h3>
            <p>{from} - {to}</p>
            <p><strong>Position: </strong>{title}</p>
            <p>
              <strong>Description: </strong>{description}
            </p>
          </div>
        </div>
)
    }

ProfileExperience.PropTypes = {
    experience: PropTypes.object.isRequired
}
export default ProfileExperience;