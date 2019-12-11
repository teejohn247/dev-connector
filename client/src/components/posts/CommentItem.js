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
         <div class="post bg-white p-1 my-1">
    <div>
    <Link to ={`/profile/${user}`}>
          <img
            class="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
  </div>
  <div>
    <p class="my-1">
      {text}
    </p>
    {auth.isAuthenticated && 
        auth.loading === false && 
        auth.user._id === user
        && (
        <button onClick = {e => deleteComment(postId, _id)} type= "button" className ="btn btn-danger">
        <i className= "fas fa-times" />
         </button>
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