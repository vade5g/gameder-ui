import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserShape from '../UserView';

export default class MatchesProfile extends Component{
  render(){
    const name = this.props.user.name;
    const img = this.props.user.img;
    //const conInf= this.props.user.contInf;
    return(
      <a href="#" className="list-group-item ">
        <h4 className="list-group-item-heading">{`Username: ${name}`}</h4>
        <img src={`${img}`} className="img-circle matchImg"/>
      </a>
    );
  }
}

MatchesProfile.propTypes={
  user: PropTypes.shape(UserShape),
}
