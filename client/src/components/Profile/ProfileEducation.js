import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import PropTypes from 'prop-types';


const ProfileEducation = ({education:{school, degree, fieldofstudy, to, from, description}}) => {
    return(
        <div style={{background:'white', display:'grid'
        ,boxShadow:'0 4px 8px rgba(0,0,0,0.19)',borderRadius:'5px',width:'69%', alignItems:'center',marginLeft:'100px', marginTop:'20px', padding:'10px' }}>
         
            <p style={{paddingRight:'20px'}}><strong>School: </strong><br />{school}</p>
            <p><strong>Time: </strong><br />{from} - {to}</p>
            <p style={{paddingLeft:'20px'}}><strong>Position: </strong><br />{fieldofstudy}</p>
            
          <div>
       <p style={{borderTop:'1px solid rgb(234, 235, 236)',padding:'10px'
         }}>
        <strong>Description: </strong><br />{description}
      </p>
        </div>
        </div>

        
       
)
    }

ProfileEducation.PropTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation;