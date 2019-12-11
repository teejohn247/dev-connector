import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { addComment } from '../../actions/post';


const CommentForm = ({addComment, postId})=>{
    const [text, setText] = useState('');

return (

    <Fragment>
        
      <div class="post-form">
        <div class="bg-primary p">
          <h3>Comment Here...</h3>
        </div>
        <form class="form my-1" onSubmit = {e => {
            e.preventDefault();
            addComment(postId, {text})
        }}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value = {text}
            onChange = {e => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
      </Fragment>
    )
        }
CommentForm.PropTypes = {
    addComment: PropTypes.func.isRequired, 
}
export default connect(null, { addComment })(CommentForm) ;