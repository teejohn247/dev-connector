import React, { useEffect, Fragment ,match } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { singlePost } from '../../actions/post';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import SingleItem from './SingleItem';

import Spinner from '../layout/spinner';

const Post = ({ singlePost, post:{ post, loading }, match}) => {
    useEffect(() => {
        singlePost(match.params.id);
    },[singlePost]);
return (
     <Fragment>
    { post === null || loading ? (
    <Spinner/ >
  ) :( <Fragment>
<SingleItem post = {post} />
<CommentForm postId = {post._id} />
<div className = "comments">
{console.log(post.comments)}
{post.comments.map(comment => (
    <CommentItem key ={comment._id} comment={comment} postId = {post._id} />
))}
</div>
</Fragment>
    )}
</Fragment>
    )
    }
    
    

Post.PropTypes = {
    singlePost: PropTypes.func.isRequired, 
    post: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    post: state.post,
})
export default connect(mapStateToProps, { singlePost })(Post) ;