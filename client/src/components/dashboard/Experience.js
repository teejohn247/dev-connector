import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { deleteExp } from '../../actions/profile'

const Experience = ({ deleteExp, expe }) => {
    const experiences = expe.map(exp => (
        // <div style={{display:'grid', justifyContent:'center'}}>
        <tr>
        <td>{exp.company}</td>
        <td className= 'hide-sm'>{exp.title}</td>
        <td>
        {/* <Moment format ='YYYY/MM/DD'>{exp.from}</Moment>-{' '} {exp.to === null ? (
            'Now'):(<Moment format = 'YYYY/MM/DD'>{exp.to}</Moment>
        )}  */}
        </td>
        <td>
            <button onClick={e => deleteExp(exp._id)} className="btn btn-danger" >Delete</button>
        </td>
        </tr>
        // </div>
    )
    )
    return (
        <Fragment>
            <h2 className='my-2'>Experience Credentials</h2>
            <table className='table'>
            <thead>
                <tr>
                    <th>Company</th>
                    <th className='hide-sm'>Title</th>
                    <th className='hide-sm'>Years</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.PropTypes = {
    experience:PropTypes.array.isRequired,
    deleteExp:PropTypes.func.isRequired
}
export default connect(null, {deleteExp})(Experience);