import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserShape from '../UserView';

export default class MatchesProfile extends Component{
  render(){
    const name = this.props.user.name;
    const img = this.props.user.img;
    const email = this.props.user.email;
    return(
      <li className="list-group-item row">
        <div className='col-md-3'>
          <img src={img} className="img-circle matchImg"/>
        </div>
        <div className='col-md-9'>
          <h4>{`Username: ${name}`}</h4>
          <p>{email}</p>
        </div>
      </li>
    );
  }
}

MatchesProfile.propTypes={
  user: PropTypes.shape(UserShape),
}
