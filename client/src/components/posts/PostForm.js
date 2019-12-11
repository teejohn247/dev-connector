import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const PostForm = ({addPost})=>{
    const [text, setText] = useState('');

return (
<Fragment>
    <h1 class="large text-primary">
    Posts
  </h1>
  <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>

  <div class="post-form">
    <div class="bg-primary p">
      <h3>Say Something...</h3>
    </div>
    <form class="form my-1" onSubmit = {e => {
        e.preventDefault();
        addPost({text})
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

PostForm.PropTypes = {
    post: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired, 
}
export default connect(null, { addPost })(PostForm) ;