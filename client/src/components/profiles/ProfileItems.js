import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const ProfileItem = ({profile: {user:{_id, name, avatar},status, company, location, skills}}) =>
{
return (
    <div class="profile bg-light">
    <img
      class="round-img"
      src={avatar}
      alt=""
    />
    <div>
      <h2>{name}</h2>
      <p>{status}{company && <span> at {company}</span>}</p>
      <p>{location && <span>{location}</span>}</p>
      <Link to= {`/profile/${_id}`} class="btn btn-primary">View Profile</Link>
    </div>

    <ul>
     {skills.slice(0,4).map((skill, index)=> (
         <li key = {index} className= "text-primary"><i className= "fas fa-check"></i>{skill}</li>
     ))}
    </ul>
  </div>
)
}
ProfileItem.PropTypes = {
    profile:PropTypes.object.isRequired
}
export default ProfileItem;