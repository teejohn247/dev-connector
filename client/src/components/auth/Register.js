import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import setAlert from '../layout/Alert';
import face from '../../images/face-map.png';
import appStore from  '../../images/app-store.png';
import google from  '../../images/google-play.png';
import iPhone from  '../../images/iPhone.png';


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
        <div class="main">
                         <div class="main-overview">

                            <div class="overviewcard">
                                    <div class="form-wrapper" style={{height:'100vh'}}>

                                <div class="om">
                                {/* <p class="omg" style={{color:"white"}}>Dev Connector</p> */}
                                <hr />
                                <div class="borde">

                                                    <p class="signup-text">Signup now and meet awesome people around the world</p>
                                                    <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" value={name}
           onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">

          <input type="email" placeholder="Email Address" name="email" value={email}
           onChange={e => onChange(e)} />

         
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
        <small class="form-text" style={{color:'white'}}>This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
            <p class="form-text" style={{color:'white'}}>By signning up you agree to the terms</p>

        <input type="submit" class="btn btn-primary" value="Register" />
        
      </form>
      <p class="" style={{textDecoration:'none', marginBottom:'-10px', textAlign:'center',display:'grid', justifyContent:'center', color:'white'}}>
        Already have an account?<br /><br /> <Link  to='/login'>Sign In</Link>
      </p>
                                                     {/* <button class="btn-secondary">Signup</button> */}
                                                     
                                                  </div>
                                                </div>
                                            </div>
                            </div>
                          </div>
                          <svg class="arrows hidden-xs hidden-sm">
      <path class="a1" d="M0 0 L30 32 L60 0"></path>
       <path class="a2" d="M0 20 L30 52 L60 20"></path>
       <path class="a3" d="M0 40 L30 72 L60 40"></path>
     </svg>
                          <div class="content-wrapper">
                                 <div class="dev">
                                        <h5>DEV CONNECTOR</h5>
                                </div> 
                                  </div>
                          <div class="main-cards">
                                
                                <div class="card feature-item">
                                    <div class="feature-icon"><i class="icon ion-person-add"></i></div>
                                    
                                    <h3>Make Friends</h3>
                                </div>
                                <div class="card feature-item">
                                    <div class="feature-icon"><i class="icon ion-images"></i></div>
                                    <h3>Publish Posts</h3>
                                </div>
                                <div class="card feature-item">
                                    <div class="feature-icon"><i class="icon ion-chatbox-working"></i></div>
                                    <h3>Private Chats</h3>
                                </div>
                                <div class="card feature-item">
                                    <div class="feature-icon"><i class="icon ion-compose"></i></div>
                                    <h3>Create Polls</h3>
                                </div>
                              
                         </div> 
                         
                          <div class="wrapper">
                                <h5 style={{marginTop:'10%'}}>find awesome people like you</h5>
                              </div> 
                               
                              <div class="map" >
                                    <img src={face} alt="" class="img-responsive face-map slideUp hidden-sm hidden-xs"
                                    style={{zIndex: 1}} />
                              </div>
                              
                              <div class="app"  >
                                    <div class="app-btn" >
                                            <button><img src={appStore} alt="App Store" /></button>
                                            <button><img src={google} alt="Google Play" /></button>
                                    </div>
                              </div>
                              <div class="wrap" style={{zIndex: 1, background: "white"}} >
                                <div>
                                    <h5>find awesome people like you</h5>
                                  </div>
                              <div class="phone">
                                    <img src={iPhone} alt="iPhone" class="img-responsive" />
                              </div> 
                            </div>

                        
                          </div>
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
