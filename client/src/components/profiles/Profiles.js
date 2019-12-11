import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItems';

const Profiles = ({getProfiles, profile:{ profiles, loading}}) => {
    useEffect(()=>{
        getProfiles()
    },[])
    return <Fragment>
        { loading ? <Spinner />:(<Fragment>
            <section class="container">
            <h1 class="large text-primary">Developers</h1>
        <p class="lead">
        <i class="fab fa-connectdevelop"></i> Browse and connect with developers
        </p>
        <div class="profiles">
        {profiles.length > 0 ? (
          profiles.map(profile => (
              <ProfileItem key = {profile._id} profile = {profile} />
          ))
          ) :  (<h4> No Profiles Found</h4>
          )}
        </div>
        </section>
        </Fragment>
    )}
        </Fragment>; 
};

Profiles.PropTypes ={
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
   profile: state.profile
})
export default connect (mapStateToProps, {getProfiles})(Profiles)

