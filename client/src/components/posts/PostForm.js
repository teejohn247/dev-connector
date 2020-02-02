import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const PostForm = ({addPost, auth:{loading,user}})=>{
    const [text, setText] = useState('');
return (
<Fragment>
{ loading ? <Spinner />:(<Fragment>

<div class="create-post">
<div class="upload ko">
<div class="one bo">
<p>Share your status</p>
</div>
<div class="two">
<p>Share</p>
</div>
<div class="one">
<p>Upload a photo</p>
</div>
<div class="two">
<p>Upload</p>
</div>
<div class="one">
<p>Write an article</p>
</div>
<div class="two">
<p>Share</p>
</div>

</div>
<div class="upload">

<div class="one " style={{display:'flex'}} >
<div >
<img src={user.avatar} alt="" class="profile-photo-md" />
</div>
    <form class="ko grp form-group" onSubmit = {e => {
        e.preventDefault();
        addPost({text})
    }}>
      <textarea
        name="text"
        cols="5"
        rows="1"
        class="form-control"
        id="exampleTextarea"
        placeholder="Write your thoughts..."
        value = {text}
        onChange = {e => setText(e.target.value)}
        required style={{width:'26vw'}}
      ></textarea>
      <div >
      {/* <ul class="list-inline">
        <li><a href="#"><i class="fas fa-comment"></i></a></li>
        <li><a href="#"><i class="fas fa-images"></i></a></li>
        <li><a href="#"><i class="fas fa-video"></i></a></li>
        <li><a href="#"><i class="fas fa-map"></i></a></li>
      </ul> */}
    </div>
    {/* <hr style={{width:'500px', marginTop:'20px',justifyContent:'start'}} /> */}
      <div class="ko" style={{display:'flex', justifyContent:'space-between', borderTop:'1px solid #D8D6E4', width:'37vw',marginTop:'36px',marginLeft:'-79px'}}>
      <ul class="list-inline">
        <li><a href="#"><i class="fas fa-comment"></i></a></li>
        </ul>
      <input type="submit" class="btn btn-primary pull-right" value="Submit" style={{width:'100px'}} />
      </div>
    </form>
    </div>
    </div>
</div>

    
    

</Fragment>)}
  </Fragment>
      
    )
        }

PostForm.PropTypes = {
    post: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired, 
}
const mapStateToProps = (state) =>({
  auth: state.auth,
})
export default connect(mapStateToProps, { addPost })(PostForm) ;

{/* <div class="create-post">
<div class="row">
  <div class="col-md-7 col-sm-7">
    <div class="form-group">
      <img src="images/users/user-1.jpg" alt="" class="profile-photo-md" />
      <textarea name="texts" id="exampleTextarea" cols="30" rows="1" class="form-control" placeholder="Write what you wish"></textarea>
    </div>
  </div>
  <div class="col-md-5 col-sm-5">
    <div class="tools">
      <ul class="publishing-tools list-inline">
        <li><a href="#"><i class="ion-compose"></i></a></li>
        <li><a href="#"><i class="ion-images"></i></a></li>
        <li><a href="#"><i class="ion-ios-videocam"></i></a></li>
        <li><a href="#"><i class="ion-map"></i></a></li>
      </ul>
      <button class="btn btn-primary pull-right">Publish</button>
    </div>
  </div>
</div>
</div> */} 