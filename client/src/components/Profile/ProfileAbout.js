import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfileById } from '../../actions/profile';


const ProfileAbout = ({profile:{bio, skills, user:{name}}}) => {
    return(


<div style={{background:'white', display:'grid'
        ,boxShadow:'0 4px 8px rgba(0,0,0,0.19)',borderRadius:'5px', alignItems:'center', width:'80%',margin:'0 auto', marginTop:'20px', padding:'10px',height:'auto' }}>
          <div style={{display:'flex', padding:'-20px', 
         }}>
        {bio && ( <Fragment>
          <p style={{paddingRight:'20px'}}><strong>{name.trim().split('  ')}s</strong> Bio</p>
          <p style={{marginLeft:'20px'}}>{bio}</p>
        </Fragment>
        )}
        </div>
        <div >
        <p style={{borderTop:'1px solid rgb(234, 235, 236)',padding:'10px'
          }}>
       </p>
       <div style={{display:'flex'}}>
       <strong>Skill Set{` `}</strong>
           {skills.map((skill,index) => (
               <div key ={index} className="p-1" style={{marginLeft:'20px'}}>
               {`  `}
               <i className="fas fa-check"></i>{`${skill}  `}
               </div>
           ))}
          </div>
          </div>
         </div>

          

    )
           }


ProfileAbout.PropTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;