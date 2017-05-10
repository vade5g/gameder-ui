import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchesProfile from './MatchesProfile';

export default class MatchesListGroup extends Component{

  renderProfiles(){
    let profiles = this.props.profiles;
    const list = [];

    profiles.forEach((user,index)=>{
      list.push(
          <MatchesProfile key = {index} user = {user}/>
      )
    });
    return list;
  }

  render(){
    const user={
      name:'some name',
      img:'https://robohash.org/7433',
    }
    return(
      <ul className="list-group">
        {this.renderProfiles()}
      </ul>
    );
  }
}

MatchesListGroup.propTypes={
  profiles: PropTypes.array,
}
