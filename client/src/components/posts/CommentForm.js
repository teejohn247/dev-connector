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
        
<div class="create-post" >
        <div class="one vv" >
<div >
{/* <img src={} alt="" class="profile-photo-md" /> */}
</div>
        <form class="" onSubmit = {e => {
            e.preventDefault();
            addComment(postId, {text})
        }}>
        <textarea
        name="text"
        cols="65"
        rows="6"
        id="exampleTextarea"
        placeholder="Write your thoughts..."
        value = {text}
        onChange = {e => setText(e.target.value)}
        style={{width:'100%', height:'100px',padding:'10px',marginLeft:'-10px'}}
        required
      ></textarea>
          {/* <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value = {text}
            onChange = {e => setText(e.target.value)}
            required
          ></textarea> */}
          <div style={{width:'130%', marginLeft:'auto', marginRight:'auto'}}>
      {/* <ul class="list-inline">
        <li><a href="#"><i class="fas fa-comment"></i></a></li>
        </ul> */}
      <input type="submit" class="btn btn-primary pull-right" value="Submit"
      style={{marginLeft:'-10px'}} />
      </div>
          {/* <input type="submit" class="btn btn-dark my-1" value="Submit" /> */}
        </form>
      </div>
      </div>
      </Fragment>
    )
        }
CommentForm.PropTypes = {
    addComment: PropTypes.func.isRequired, 
}
export default connect(null, { addComment })(CommentForm) ;