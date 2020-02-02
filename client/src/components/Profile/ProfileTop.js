// import profile from "../../reducers/profile";
// import React, { useEffect, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from '../layout/spinner';
// import { getProfileById } from '../../actions/profile';

// const ProfileTop = ({profile:{status,company, location, website, social, user:{name, avatar}}}) => {
//     return(
//         <div class="profile-top bg-primary p-2">
//           <img
//             class="round-img my-1"
//             src={avatar}
//             alt=""
//           />
//           <h1 class="large">{name}</h1>
//           <p class="lead">{status} {company && <span> at {company}</span>}</p>
//           <p>{location}</p>
//           <div class="icons my-1">
//           {website && (
//             <a href={website} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//            {social && social.twitter && (
//             <a href={social.twitter} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//            {social && social.facebook && (
//             <a href={social.facebook} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//             {social && social.linkedin && (
//             <a href={social.linkedin} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//           {social && social.youtube && (
//             <a href={social.youtube} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//            {social && social.instagram && (
//             <a href={social.youtube} target="_blank">
//               <i class="fas fa-globe fa-2x"></i>
//             </a>
//           )
//           }
//           </div>
//         </div>
//     )
// }
// ProfileTop.PropTypes = {
//     profile: PropTypes.object.isRequired
// }
// export default ProfileTop;