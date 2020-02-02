import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import ProfilesWidget from './ProfileWidget';
import { getPosts } from '../../actions/post';
import { getProfiles } from '../../actions/profile';
import bv from '../../images/bv.jpg'


const Posts = ({ getPosts, getProfiles, profile:{profiles}, auth:{user}, post: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    },[getPosts]);
    useEffect(()=>{
        getProfiles()
    },[getProfiles])
    console.log(profiles.map(arr => arr))
    return ( <Fragment>
       { loading || user == null || profiles.length == 0 ? <Spinner /> : <Fragment>
        <section class="main">
        <div class="posts-grid">
        <div class='item-1'>

        <div class="prof a round a0" style={{padding:'10px'}}>
        <img src={user.avatar} alt='dp' class='round' />
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <hr />
        <Link to = 
        {`/profile/${user._id}`} style={{textDecoration:'none', cursor:'pointer', color:'#00A2FA'}}>
        View my profile</Link>
        </div>
        
        <div class="prof a a1" style={{padding:'10px'}}>
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>

        <div class="prof a a2" style={{padding:'10px'}}>
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>
        <div class="prof a a3" style={{padding:'10px'}}>
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>

        </div>
        <div class='item-2' >
      <PostForm />
      <div>
        {posts.map(post => (
            <PostItem key = {post._id} post={post} />
        ))}
        </div>
        </div>
        <div class='item-3' style={{minHeight:'1px', padding:'20px'}}>
        <div class="pro">
            <h4 style={{textAlign:'left', margin:'10px', padding:'20px', borderBottom:'1px solid #BDB9D5', fontSize:'16px'}}>New Members</h4>
        {profiles.map(profile => (
            <ProfilesWidget key = {profile.user._id} profile={profile} />
        ))}
        </div>
        <div class="pro a">
        <img src={bv} alt='dp' />
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>

        </div>
        </div>
    </section>
        </Fragment>
    }
    </Fragment>
    )}
    
Posts.PropTypes = {
    getPosts: PropTypes.func.isRequired,
    getProfiles: PropTypes.func.isRequired,
    post : PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired,
    profile : PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
   post: state.post,
   auth: state.auth,
   profile: state.profile
})
export default connect (mapStateToProps, { getPosts, getProfiles })(Posts);