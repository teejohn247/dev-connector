import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/spinner';
import { getCurrentProfile } from '../../actions/profile';
import bv from '../../images/bv.jpg'



const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }}) => { 
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])
console.log(profile)
    return loading && profile == null ? (
      <Spinner/ >
    ) : ( <Fragment>
      <div class="dash">
      <div class='pix'>
      <div class='dp'>
      <div class='overlay'>
      <div class='h'> 
<img src={user.avatar} alt='' />
<span class = 'hidden'>
<DashboardActions style />
</span>
{/* <button>Add friend</button> */}
</div>
      </div>
      </div>
      </div>
      </div>
      <div class='das'>
      <div className='shr'>
      <div class='mid lef'>
      <div class='edit'>
<h1 class="large text-primary">
        Dashboard </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome {user && user.name} </p>
      {profile !== null ? (
        <Fragment>
       <DashboardActions />
       <div class="my-2">
            <button class="btn btn-danger">
                <i class="fas fa-user-minus"></i>
                Delete My Account
            </button>
          </div>
          </Fragment>
      ) : (
        <Fragment>
          <p>You have not set up a profile, please add some info</p>
          <Link to = '/create-profile' className = 'btn btn-primary'>Create Profile</Link>
        </Fragment>
      )}
      </div>
      </div>
      <div class='mid middl'>
      <div class='opt'>
      {profile !== null ? (
        <Fragment>
       <Experience expe = {profile.experience} />
       <Education educ = {profile.education} />
          </Fragment>
      ) : (
        <Fragment>
          <p>You have not set up a profile, please add some info</p>
          <Link to = '/create-profile' className = 'btn btn-primary'>Create Profile</Link>
        </Fragment>
      )}
      
      </div>

      </div>
      {/* <div class='ri'>
        <h4>okay</h4>
      </div> */}
      </div>
      </div>
    </Fragment>
    )
  }

  Dashboard.PropTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
    auth:state.auth,
    profile: state.profile
  })

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
