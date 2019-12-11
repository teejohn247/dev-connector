import profile from "../../reducers/profile";
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addLikes } from '../../actions/post';
import { removeLikes } from '../../actions/post';
import { deletePost } from '../../actions/post';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const PostItem = ({addLikes, removeLikes, deletePost, auth, post:{ _id, name,  text, avatar, user, likes, comments, date }}) => {
console.log(_id)
    return (
    <div class="post bg-white p-1 my-1">
        <div>
        <Link to ={`/post/${_id}`}>
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
         <p class="post-date">
            Posted {date}
        </p>
        <button onClick = {e => addLikes(_id)} type="button" class="btn btn-light">
          <i class="fas fa-thumbs-up"></i>
          <span>{likes.length}</span>
        </button>
        <button onClick = {e => removeLikes(_id)}type="button" class="btn btn-light">
          <i class="fas fa-thumbs-down"></i>
        </button>
        <Link to ={`/posts/${_id}`} class="btn btn-primary">
           Discussion{comments.length > 0 && (
          <span class='comment-count'>{comments.length}</span>)} 
        </Link>
        {auth.loading === false && user === auth.user._id && (
            <button onClick = {e => deletePost(_id)}   
            type="button"
            class="btn btn-danger"
          >
            <i class="fas fa-times"></i>
          </button>
        )}
        
      </div>
    </div>
      
    )
        }

PostItem.PropTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLikes: PropTypes.func.isRequired, 
    removeLikes: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}
const mapStateToProps = (state) =>({
    auth: state.auth,
})
export default connect(mapStateToProps, { addLikes, removeLikes, deletePost })(PostItem);