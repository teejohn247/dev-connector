import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfilesWidget from '../posts/ProfileWidget';
import { getProfiles } from '../../actions/profile';
import bv from '../../images/bv.jpg'




const AllProfile = ({getProfileById, getProfiles, profile:{profiles}, profile:{profile,loading}, auth, match }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    },[]);
    useEffect(()=>{
        getProfiles()
    },[getProfiles])
    return ( <Fragment>
        { profile === null || loading || auth.user === null ? (
        <Spinner/ >
      ) :(
            
            <Fragment>
            <section class="main">
        <div class="posts-grid">
        <div class='item-1'>
        <div class="prof round" style={{padding:'10px'}}>
        <img src={auth.user.avatar} alt='dp' class='round' />
        <h4>{auth.user.name}</h4>
        <p>{auth.user.email}</p>
        <hr />
        {/* <h1 class="large">{name}</h1> */}
          <p class="lead">{profile.status} {profile.company && <span> at {profile.company}</span>}</p>
          <p>{profile.location}</p>
          <p>{profile.location}</p>
          <p>{profile.location}</p>

          {/* <div class="icons my-1"> */}
          {profile.website && (
            <a href={profile.website} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
           {profile.social && profile.social.twitter && (
            <a href={profile.social.twitter} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
           {profile.social && profile.social.facebook && (
            <a href={profile.social.facebook} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
            {profile.social && profile.social.linkedin && (
            <a href={profile.social.linkedin} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
          {profile.social && profile.social.youtube && (
            <a href={profile.social.youtube} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
           {profile.social && profile.social.instagram && (
            <a href={profile.social.youtube} target="_blank">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          )
          }
        
        {/* </div> */}
        </div>
        <div class="pro a" style={{padding:'20px'}}>
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>
        
        </div>

        <div class='item-2'>

            <Link to ='/profiles' className= 'btn btn-light'>
            Back To Profiles
            </Link>
            {auth.isAuthenticated && 
                auth.loading === false && 
                auth.user._id === profile.user._id 
                && (
                <Link to ='/edit-profile' className='btn btn-dark'>
                Edit Profile
                </Link>
                )}
            <ProfileAbout profile = {profile} />
            
            <div style={{background:'white', display:'grid'
        ,boxShadow:'0 4px 8px rgba(0,0,0,0.19)',borderRadius:'5px', alignItems:'center', width:'80%',margin:'0 auto', marginTop:'20px', padding:'10px',height:'auto' }}>
            <h2>Experience</h2>
            </div>
{profile.experience.length > 0 ? (<Fragment>
 {profile.experience.map(experience => (
     <ProfileExperience key= {experience._id} experience= {experience} />
 ))}
</Fragment>): (<h4 style={{textAlign:'center'}}>No experience credentials</h4>)}

          <h2>Education</h2>
          {profile.education.length > 0 ? (<Fragment>
 {profile.education.map(education => (
     <ProfileEducation key= {education._id} education= {education} />
 ))}
</Fragment>): (<h4 style={{textAlign:'center'}}>No education credentials</h4>)}
        </div>
        <div class='item-3'>
        <div class="pro">
            <h4 style={{textAlign:'left', margin:'10px', padding:'20px', borderBottom:'1px solid #BDB9D5', fontSize:'16px'}}>New Members</h4>
        {profiles.map(profile => (
            <ProfilesWidget key = {profile.user._id} profile={profile} />
        ))}
        </div>
        <div class="pro a">
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>

        </div>

        </div>
        
       
    </section>
    </Fragment>
      )
 }
      </Fragment>
    )}
    
AllProfile.PropTypes = {
    getProfileById: PropTypes.func.isRequired,
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
   profile: state.profile,
   auth: state.auth,
   Profile:state.profile
})
export default connect (mapStateToProps, {getProfileById, getProfiles})(AllProfile);