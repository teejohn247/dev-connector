import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/spinner';
import { getCurrentProfile } from '../../actions/profile';


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }}) => { 
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])
console.log(profile)
    return loading && profile == null ? (
      <Spinner/ >
    ) : ( <Fragment>
<h1 class="large text-primary">
        Dashboard </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome {user && user.name} </p>
      {profile !== null ? (
        <Fragment>
       <DashboardActions />
       <Experience expe = {profile.experience} />
       <Education educ = {profile.education} />

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
          <Link to = '/create-profile' className = 'btn btn-primary my-1'>Create Profile</Link>
        </Fragment>
      )}
        
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
