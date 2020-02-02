import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import setAlert from '../layout/Alert';
import face from '../../images/face-map.png';
import appStore from  '../../images/app-store.png';
import google from  '../../images/google-play.png';
import iPhone from  '../../images/iPhone.png';




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
        <div class="main">
                         <div class="main-overview">

                            <div class="overviewcard">
                                    <div class="form-wrapper">

                                <div class="om">
                                <p class="omg" style={{color:"white"}}>Dev Connector</p>
                                <hr />
                                <div class="borde">

                                                    <p class="signup-text">Signup now and meet awesome people around the world</p>
                                                    <form class="form" noValidate onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control" id="example-name" placeholder="Enter address"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control" id="example-name" placeholder="Enter password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <br />
        <p class="signup-text">By signing In you agree to the terms and conditions</p>
        <br />
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
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
                              
                              <div class="app" style={{ background: "white"}}>
                                    <div class="app-btn" >
                                            <button><img src={appStore} alt="App Store" /></button>
                                            <button><img src={google} alt="Google Play" /></button>
                                    </div>
                              </div>
                              <div class="wrap" style={{ background: "white"}} >
                                <div>
                                    <h5>find awesome people like you</h5>
                                  </div>
                              <div class="phone" style={{ background: "white"}}>
                                    <img src={iPhone} alt="iPhone" class="img-responsive" />
                              </div> 
                            </div>

                        
                          </div>
    
    
     


     
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
