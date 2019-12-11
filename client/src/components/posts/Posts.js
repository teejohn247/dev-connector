import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';


const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    },[getPosts]);
    return ( <Fragment>
       { loading ? <Spinner /> : <Fragment>
        <section class="container">
      <PostForm />
      <div class="posts">
        {posts.map(post => (
            <PostItem key = {post._id} post={post} />
        ))}
        </div>
    </section>
        </Fragment>
    }
    </Fragment>
    )}
    
Posts.PropTypes = {
    getPosts: PropTypes.func.isRequired,
    post : PropTypes.object.isRequired
    
}
const mapStateToProps = state => ({
   post: state.post
})
export default connect (mapStateToProps, { getPosts })(Posts);