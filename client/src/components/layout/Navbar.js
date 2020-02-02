import React, { Component, Fragment } from 'react';
import Drawer from 'react-motion-drawer';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';



const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <Fragment>
    <ul class="nav no-search">
      <li class="sidenav__list-item">
        <Link to ='/profiles'><i className ='fas fa-user'/>{' '} <span className = 'hide-sm'
        >Developers</span></Link>
      </li>
      <li class="sidenav__list-item">
        <Link to ='/posts'><i className ='fas fa-user'/>{' '} <span className = 'hide-sm'
        >Posts</span></Link>
      </li>
      <li class="sidenav__list-item">
        <Link to ='/dashboard'><i className ='fas fa-user'/>{' '} <span className = 'hide-sm'
        >Dashboard</span></Link>
      </li>
      <li class="sidenav__list-item">
        <a onClick={logout} href= ''>{' '} <span className = 'hide-sm'
        >Logout</span></a>
      </li>
    </ul>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
        {/* <li><Link to='/'> Developers</Link></li> */}
        <li class="sidenav__list-item" ><Link to='/profiles'>Developers</Link></li>
        <li class="sidenav__list-item"><Link to='/register'>Register</Link></li>
        <li class="sidenav__list-item"><Link to='/login'>Login</Link></li>
      </Fragment>
  )
    return (
    //   <nav class="navbar">
    //   <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
    //           <span class="bars"><i class="fa fa-bars"></i></span>
    //           <span class="times"><i class="fa fa-times"></i></span>

    //       </label>
    //       <Link to='/' class="logo"><i className="fas fa-code"></i> DevConnector</Link>
    //   {/* <Link to='/' style={{color:'white',textDecoration:'none'}}> */}

    //   <input type="checkbox" id="chkToggle"></input>
    //   <ul class="main-nav mob" id="js-menu" style={{color:'white',textDecoration:'none'}}>
      // {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    //   </ul>
    // </nav>
    <Fragment>
       <nav class="navbar">
                    <div class="menu-icon">
                            <i class="fas fa-bars"></i>
                          </div>
         <Link to='/' class="logo"><i className="fas fa-code"></i> DevConnector</Link>
         <Link to='/' class="logoMobile"><i className="fas fa-code"></i> DevConnector</Link>
         <ul class="sidenavList">
      {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
       </ul>
            </nav>
    <aside class="sidenav">
                <div class="sidenav__close-icon">
                        <i class="fas fa-times">X</i>
                      </div>
                <ul class="sidenav__list">
      {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
                      </ul>
        </aside>
        </Fragment>
    );
  }
{/* <nav class="navbar">
    <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
            <i class="fa fa-bars"></i>
        </label>
    <a href="#" class="logo">logo</a>
    <input type="checkbox" id="chkToggle"></input>
    <ul class="main-nav" id="js-menu">
      <li>
        <a href="#" class="nav-links">Home</a>
      </li>
      <li>
        <a href="#" class="nav-links">Products</a>
      </li>
      <li>
        <a href="#" class="nav-links">About Us</a>
      </li>
      <li>
        <a href="#" class="nav-links">Contact Us</a>
      </li>
      <li>
        <a href="#" class="nav-links">Blog</a>
      </li>
    </ul>
  </nav> */}
  

Navbar.PropTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
 auth: state.auth
})
export default connect(mapStateToProps, { logout })(Navbar);
