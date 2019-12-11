import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import setAlert from '../layout/Alert';


const Register = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
  })
   
  const { name, email, password, password2 } = formData;
   const onChange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value})
   }

   
 const onSubmit = (e) => {
    e.preventDefault();
    if(password !== password2){
      setAlert('Password do not match', 'danger')
    }else{
      register(formData)
    }
  }

  if(isAuthenticated){
    return <Redirect to="/login" />
  }

    return (
      <Fragment>

<section class="container">
      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" value={name}
           onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">

          <input type="email" placeholder="Email Address" name="email" value={email}
           onChange={e => onChange(e)} />

          <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
           onChange={e => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
           onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
      </Fragment>
    );
  }

Register.PropTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
