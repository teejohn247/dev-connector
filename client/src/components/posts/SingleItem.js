import profile from "../../reducers/profile";
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const SingleItem = ({ post:{ _id, name,  text, avatar, user, likes, comments, date }}) => {
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
        
      </div>
    </div>
      
    )
        }

SingleItem.PropTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) =>({
    auth: state.auth,
})
export default connect(mapStateToProps)(SingleItem) ;