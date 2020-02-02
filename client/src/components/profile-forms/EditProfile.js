import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter,Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';
import { getCurrentProfile } from '../../actions/profile';


const EditProfile = ({profile: {profile, loading}, history, createProfile, getCurrentProfile}) => {
  
      const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
      })

      const [displaySocialInputs, toggleSocialInputs]=useState(false);
      useEffect(() => {
        getCurrentProfile()
        setFormData({
        company: loading || !profile.company ? '' : profile.company,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' :profile.location,
        status: loading || !profile.status ? '' :  profile.status,
        skills: loading || !profile.skills ? '' :  profile.skills,
        githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
        bio: loading || !profile.bio ? '' : profile.bio,
        twitter: loading || !profile.twitter ? '' : profile.twitter,
        facebook: loading || !profile.facebook ? '' : profile.facebook,
        linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
        youtube: loading || !profile.youtube ? '' : profile.youtube,
        instagram: loading || !profile.instagram ? '' : profile.instagram
        })
        console.log(profile)
    }, [loading])

    const {
        company, website, location, status, skills, githubusername, bio, twitter, facebook,
        linkedin, youtube, instagram
    } = formData;
      
      const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value});
      const onSubmit = (e) => {
          e.preventDefault();
          createProfile(formData, history, true)
      }

return(

    <section class="container" style={{display:'grid', justifyContent:'center', margin:'20px',
    margin:'20px', padding:'10px'}}>
    <h1 class="large text-primary">
      Create Your Profile
    </h1>
    <p class="lead">
      <i class="fas fa-user"></i> Let's get some information to make your
      profile stand out
    </p>
    <p>* = required field</p>
    <form class="form" onSubmit={e => onSubmit(e)}>
      <div class="form-group">
        <select name="status" value={status} onChange={e => onChange(e)}>
          <option value="0">* Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <p class="form-text"
          >Give us an idea of where you are at in your career</p
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
        <p class="form-text"
          >Could be your own company or one you work for</p
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
        <p class="form-text"
          >Could be your own or a company website</p
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
        <p class="form-text"
          >City & state suggested (eg. Boston, MA)</p
        >
      </div>
      <div class="form-group">
        <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
        <p class="form-text"
          >Please use comma separated values (eg.
          HTML,CSS,JavaScript,PHP)</p
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Github Username"
          name="githubusername"
          value={githubusername} 
          onChange={e => onChange(e)}
        />
        <p class="form-text"
          >If you want your latest repos and a Github link, include your
          username</p
        >
      </div>
      <div class="form-group">
        <textarea placeholder="A short bio of yourself" name="bio" value={bio} 
          onChange={e => onChange(e)}></textarea>
        <p class="form-text">Tell us a little about yourself</p>
      </div>

      <div class="my-2">
        <button onClick = {() => toggleSocialInputs(!displaySocialInputs)} 
        type="button" class="btn btn-light">
          Add Social Network Links
        </button>
        <span>Optional</span>
      </div>

      {displaySocialInputs && 
          <Fragment>
           <div class="form-group social-input" >
        <i class="fab fa-twitter fa-2x"></i>
        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} 
          onChange={e => onChange(e)}/>
      </div>

      <div class="form-group social-input">
        <i class="fab fa-facebook fa-2x"></i>
        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} 
          onChange={e => onChange(e)} />
      </div>

      <div class="form-group social-input">
        <i class="fab fa-youtube fa-2x"></i>
        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} 
          onChange={e => onChange(e)} />
      </div>

      <div class="form-group social-input">
        <i class="fab fa-linkedin fa-2x"></i>
        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} 
          onChange={e => onChange(e)} />
      </div>

      <div class="form-group social-input">
        <i class="fab fa-instagram fa-2x"></i>
        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} 
          onChange={e => onChange(e)} />
      </div>
          </Fragment>
      }
      <input type="submit" class="btn btn-primary my-1" />
      <Link to='/dashboard' class="btn btn-light my-2" style={{color:'blue'}}>Go Back</Link>
    </form>
  </section>
)
}

   

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
})



export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
