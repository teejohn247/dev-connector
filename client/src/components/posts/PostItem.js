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
      <div class="pos" >
      <div style={{display:'flex'}}>
      <div class="bord" style={{width:'36vw',borderBottom:'1px solid #D8D6E4'}}>
        <Link to ={`/post/${_id}`}>
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
        <div style={{width:'100px',height:'30px',marginLeft:'-30%'}} onClick = {e => addLikes(_id)} class='heart'>
        <span style={{}}> {likes.length} </span>
        </div>
        {/* <button  type="button" class='heart' > */}
        {/* <span class="like">&#10084;</span> */}
          {/* <i class=" fas fa-thumbs-up"></i> */}
        {/* </button> */}
        <button style={{width:'50px',height:'30px'}} onClick = {e => removeLikes(_id)}type="button">
          <i class="unlike fas fa-thumbs-down"></i>
        </button>
        <Link to ={`/posts/${_id}`} class="btn btn-primary" style={{ textDecoration: 'none',color:'blue' }}>
           comments{comments.length > 0 && (
          <span class='comment-count' style={{color:'blue'}}> {comments.length} </span>)} 
        </Link>
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