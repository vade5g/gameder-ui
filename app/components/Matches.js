import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchesListGroup from './ListGroup/MatchesListGroup';

export default class Matches extends Component{

  render(){
    const profiles=[{name:'ae',img:'https://robohash.org/2440'},{name:'se',img:'https://robohash.org/9415'}];
    return(
      <MatchesListGroup profiles={this.props.profiles}/>
    );
  }
}
