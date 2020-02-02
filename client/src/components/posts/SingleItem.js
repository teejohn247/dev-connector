import profile from "../../reducers/profile";
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfilesWidget from './ProfileWidget';
import bv from '../../images/bv.jpg';
import { getProfiles } from '../../actions/profile';
import { deleteComment } from '../../actions/post';
import { deletePost } from '../../actions/post';
import CommentItem from './CommentItem';
import Spinner from '../layout/spinner';

const SingleItem = ({postId,deletePost, getProfiles, auth, deleteComment, profile:{profiles}, post:{ _id, name,  text, avatar, user, likes, comments, date }}) => {
  useEffect(()=>{
    getProfiles()
},[getProfiles])
console.log(_id)
  return (
    <div class="pos" >
      <div style={{display:'flex'}}>
      <div class="bord" style={{width:'36vw',borderBottom:'1px solid #D8D6E4'}}>
        <Link to ={`/profile/${user}`}>
          <img
           class="profile-photo"
            src={avatar}
            alt=""
          />
        </Link>
        
      <h4 style={{color:'#212529',fontSize:'13px'}}>{name}</h4>
      </div>
     
      </div>
      
      <div class="kk" style={{width:'36vw',background:'white',padding:'10px',borderBottom:'1px solid #D8D6E4'}}>
        <p class="link">
        {/* <Link to ={`/post/${_id}`} style={{ textDecoration: 'none' }}>
        <h4 class="bord">{name}</h4>
        </Link> */}
        </p>
        {"\n"}
        <p class="" style={{color:'#888da8',fontSize:'13px', textAlign:'left',lineHeight:'20px'}}>
        {"\n"}
        {text}
        </p>
      </div>
      <div class="kk" style={{display:'flex',width:'36vw',background:'white',padding:'10px',
    borderBottom:'1px solid #D8D6E4',padding:'10px'}}>
         <p style={{width:'90%',marginTop:'-30px'}}>
            Posted {date.split('T')[0]}
        </p>
        {auth.loading === false && user === auth.user._id && (
          <span class="">
            <button onClick = {e => deletePost(_id)}   
            type="button"
            class="btn btn-danger del"
          >Delete
            {/* <i class="fas fa-times"></i> */}
          </button>
          </span>
        )}
        
    </div>
    </div>

//   <section class="posts-grid">
// <div class='lefts'>
//         <div class="prof round">
//         <img src={user.avatar} alt='dp' class='round' />
//         <h4>{user.name}</h4>
//         <p>{user.email}</p>
//         <hr />
//         <Link to = 
//         {`/profile/${user._id}`} style={{textDecoration:'none', cursor:'pointer', color:'#00A2FA'}}>
//         View my profile</Link>
//         </div>
//         <div class="prof b">
//         <img src={bv} alt='dp' />
//         <p>Looking for talents</p>
//         <button>POST A JOB</button>

        // </div> */}

        // </div>
        // <div class='mains'>
      
      
      //    <Link to ={`/post/${_id}`}>
      //     <img
      //       class="profile-photo"
      //       src={avatar}
      //       alt=""
      //     />
      // <h4 style={{color:'#212529',fontSize:'13px'}}>{name}</h4>
      //   </Link>
      
      //   <p class="bord" style={{color:'#888da8',fontSize:'13px', textAlign:'left',lineHeight:'20px'}}>
      //   {"\n"}

      //   {text}
      //   </p>
      //   <p>
      //       Posted {date}
      //   </p> 
        // </div>
        
        
      //  <div>
      //   <p class="my-1">
      //     {text}
      //   </p>
          
    //       <div class='rights'>
    //     <div class="pro">
    //         <h4 style={{textAlign:'left', margin:'10px', padding:'20px', borderBottom:'1px solid #BDB9D5', fontSize:'16px'}}>New Members</h4>
    //     {profiles.map(profile => (
    //         <ProfilesWidget key = {profile.user._id} profile={profile} />
    //     ))}
    //     </div>
    //     <div class="pro b">
    //     <img src={bv} alt='dp' />
    //     <p>Looking for talents</p>
    //     <button>POST A JOB</button>

    //     </div>

    //     </div>
        
    // </section>
      
    )
        }

SingleItem.PropTypes = {
    post: PropTypes.object.isRequired,
    getProfiles: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired,

}
const mapStateToProps = (state) =>({
    auth: state.auth,
    profile: state.profile

})
export default connect(mapStateToProps, { getProfiles, deleteComment, deletePost })(SingleItem) ;