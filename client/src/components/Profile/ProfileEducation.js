import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import PropTypes from 'prop-types';


const ProfileEducation = ({education:{school, degree, fieldofstudy, to, from, description}}) => {
    return(
        <div class="profile-exp bg-white p-2">
          <div>
            <h3 class="text-dark">{school}</h3>
            <p>{from} - {to}</p>
            <p><strong>Position: </strong>{fieldofstudy}</p>
            <p>
              <strong>Description: </strong>{description}
            </p>
          </div>
        </div>
)
    }

ProfileEducation.PropTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation;