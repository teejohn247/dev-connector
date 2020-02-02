import React, { useEffect, Fragment ,match } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { singlePost } from '../../actions/post';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import SingleItem from './SingleItem';
import ProfilesWidget from './ProfileWidget';
import { getProfiles } from '../../actions/profile';
import Spinner from '../layout/spinner';
import bv from '../../images/bv.jpg'

const Post = ({ singlePost, getProfiles, profile:{profiles}, post:{ post, loading }, auth:{user}, match}) => {
    useEffect(() => {
        singlePost(match.params.id);
    },[singlePost]);
    useEffect(() => {
        getProfiles();
    },[getProfiles]);
return (
     <Fragment>
    { post === null || loading  || user === null ? (
    <Spinner/ >
  ) :( <Fragment>
      <section class="main">
      <div class="posts-grid">
      <div class ='item-1'>
        <div class="prof a a2 round" style={{padding:'10px'}}>
        <img src={user.avatar} alt='dp' class='round' />
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <hr />
        <Link to = 
        {`/profile/${user._id}`} style={{textDecoration:'none', cursor:'pointer', color:'#00A2FA'}}>
        View my profile</Link>
        </div>
        <div class="prof a" style={{padding:'10px'}}>
        {/* <img src={bv} alt='dp' /> */}
        <p>Looking for talents</p>
        <button>POST A JOB</button>

        </div>

        </div>
        <div class='item-2'>
<CommentForm postId = {post._id} />
<SingleItem post = {post} postId = {post._id} />
<div className = "comments">
{console.log(post.comments)}
{post.comments.map(comment => (
    <CommentItem key ={comment._id} comment={comment} postId = {post._id} />
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
    )}
</Fragment>
    )
    }
    
    

Post.PropTypes = {
    singlePost: PropTypes.func.isRequired, 
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,

}
const mapStateToProps = (state) => ({
    post: state.post,
    auth: state.auth,
    profile:state.profile
})
export default connect(mapStateToProps, { singlePost,getProfiles })(Post) ;