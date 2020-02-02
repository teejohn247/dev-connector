import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import Spinner from '../layout/spinner';
import PostItem from './PostItem';


const CommentItem = ({postId, comment:{ _id, text, name, user, avatar, date}, auth, deleteComment })=>{

return (
    <Fragment>
         <div class="pos">
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
        {auth.isAuthenticated && 
        auth.loading === false && 
        auth.user._id === user
        && (
          <span class="">
        <button onClick = {e => deleteComment(postId, _id)} type= "button" class ="btn btn-danger del">
        Delete
         </button>
         </span>
        )}
        </div>
      </div>
      </Fragment>
    )
        }

        CommentItem.PropTypes = {
            comment: PropTypes.object.isRequired, 
            postId: PropTypes.number.isRequired,
            deleteComment: PropTypes.func.isRequired,
            auth: PropTypes.object.isRequired,
        }
      const  mapStateToProps = state =>({
          auth:state.auth

        })
export default connect(mapStateToProps, {deleteComment})(CommentItem) ;