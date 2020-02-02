import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { deleteEdu } from '../../actions/profile';

const Education = ({ deleteEdu, educ }) => {
    const educations = educ.map(edu => (
        <tr>
        <td>{edu.school}</td>
        <td className= 'hide-sm'>{edu.degree}</td>
        <td>
        {/* <Moment format ='YYYY/MM/DD'>{exp.from}</Moment>-{' '} {exp.to === null ? (
            'Now'):(<Moment format = 'YYYY/MM/DD'>{exp.to}</Moment>
        )}  */}
        </td>
        <td>
            <button className="btn btn-danger" onClick={e => deleteEdu(edu._id)}>Delete</button>
        </td>
        </tr>
    )
    )
    return (
        <Fragment>
            <h2 className='my-2'>Education Credentials</h2>
            <table className='table'>
            <thead>
                <tr>
                    <th>Company</th>
                    <th className='hide-sm'>Degree</th>
                    <th className='hide-sm'>Years</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.PropTypes = {
    education:PropTypes.array.isRequired,
    deleteEdu: PropTypes.func.isRequired
}
export default connect(null, { deleteEdu })(Education);