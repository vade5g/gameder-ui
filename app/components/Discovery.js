import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Button from './Button';

// a proxy endpoint
const endpoint = '/api/profiles';
let profiles = {};

export default class Discovery extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
      loads:0,
      clicks:0
    };
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickDeny = this.clickDeny.bind(this);
  }

  componentWillMount() {
    axios.get(endpoint)
      .then(res => {
        profiles = res.data;
        console.log(profiles);
        this.setState({
          currentUser: this.getUserFromArray(),
        });

        console.log(profiles);
        this.props.addProfiles(profiles);
      });

  }

  getNewUsers(){
    axios.get(endpoint)
      .then(res => {
        profiles = profiles.concat(res.data);
        console.log(profiles);
      });
  }

  getUserFromArray(){
    let user = profiles[0]
    profiles.splice(0,1)
    if(profiles.length<=2){
      this.getNewUsers();
    }
    return user;
  }

  likeProfile(){
    let profile = this.state.currentUser;
    if(profile.like==true){
      this.props.addProfiles(profile);
    }
    this.newUser();
  }

  getRandomUser() {
    let i = Math.floor(Math.random()*((profiles.length-1)-0+1)+0);
    if(!this.state)
      return profiles[i];

    return profiles[i] !== this.state.currentUser
      ? profiles[i]
      : this.getRandomUser();
  }

  clickSuccess(){
    this.likeProfile();
  }

  clickDeny(){
    this.newUser();
  }

  newUser(){
    this.setState({
      currentUser: this.getUserFromArray(),
    });
  }

  render(){
    return(
      <div>
        <UserView user={this.state.currentUser} onSuccessClick={this.clickSuccess} onDenyClick={this.clickDeny}/>
      </div>
    );
  }
}
