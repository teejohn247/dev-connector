import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import setAlert from '../layout/Alert';



const Login = ({setAlert, login, isAuthenticated, user}) => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
  })
   
  const {  email, password } = formData;
   const onChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value})
   }

   
 const onSubmit = (e) => {
    e.preventDefault();
      login({ email, password })
  }

  if(isAuthenticated && user !== null){
    return <Redirect to="/dashboard"/>
  }
    return (
      <Fragment>
<section class="container">

      <h1 class="large text-primary">Sign In</h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
      <form class="form" noValidate onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>

     
      </Fragment>
    );
  }

Login.PropTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated:  PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { setAlert, login })(Login);
