import React, { Component, Redirect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
     <Redirect to ='/dasboard' />
  }
    return (
      <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
            <Link to='/register'> <span class="btn btn-primary">Sign Up</span></Link>
            <Link to='/login'> <span class="btn btn-light">Login</span></Link>
          </div>
        </div>
      </div>
    </section>
    );
  }

  Landing.PropTypes = {
    isAuthenticated: PropTypes.bool,
  }
  const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
  })

export default connect(mapStateToProps)(Landing);
