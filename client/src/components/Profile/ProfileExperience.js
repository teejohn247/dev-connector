import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import PropTypes from 'prop-types';


const ProfileExperience = ({experience:{company, title, location, getCurrentProfile, to, from, description}}) => {
    return(

<div style={{background:'white', display:'grid'
        ,width:'69%',boxShadow:'0 4px 8px rgba(0,0,0,0.19)',borderRadius:'5px', alignItems:'center',marginLeft:'100px', marginTop:'20px', padding:'10px' }}>
            <p style={{paddingRight:'20px'}}><strong>company: </strong><br />{company}</p>
            <p><strong>Time: </strong><br />{from} - {to}</p>
            <p style={{paddingLeft:'20px'}}><strong>title: </strong><br />{title}</p>
            
          <div>
       <p style={{borderTop:'1px solid rgb(234, 235, 236)',padding:'10px'
         }}>
        <strong>Description: </strong><br />{description}
      </p>
        </div>
        </div>

)
    }

ProfileExperience.PropTypes = {
    experience: PropTypes.object.isRequired
}
export default ProfileExperience;