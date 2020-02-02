import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItems';
import bv from '../../images/bv.jpg'

const Profiles = ({getProfiles, profile:{ profiles, loading}}) => {
    useEffect(()=>{
        getProfiles()
    },[])
    return <Fragment>
        { loading ? <Spinner />:(<Fragment>
            <section class="friends-container">
            {/* <h1 class="large text-primary">Developers</h1>
        <p class="lead">
        <i class="fab fa-connectdevelop"></i> Browse and connect with developers
        </p> */}
        <div class="friends" >
<div class='kok' >
        {profiles.length > 0 ? (
          profiles.map(profile => (
              <ProfileItem key = {profile._id} profile = {profile} />
          ))
          ) :  (<h4> No Profiles Found</h4>
          )}
        </div>
        </div>
        <div class='righ'>
<div class="in">
<div class= 'mvm'>
    <div class='klmn'>
    <img src={bv} alt='ok' />
    <img src={bv} alt='ok' />
    </div>
    <div class='kln'>
<h4>
       Dev connectors, grow your career by following us
    </h4>
    <p>stay up-to date</p>
</div>
</div>



<div class= 'mvm'>
    <div class='klmn'>
    <img src={bv} alt='ok' />
    <img src={bv} alt='ok' />
    </div>
    <div class='kln'>
<h4>
       Dev connectors, grow your career by following us
    </h4>
    <p>stay up-to date</p>
</div>
</div> 
</div>
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

