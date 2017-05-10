import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://lh3.googleusercontent.com/290f7ygV_rTRZtBYw-ISEA7jew3FkpWWYkYMKcqPFyMT72Dp8Mf6fRGlhd35njQVZToszbGB_-Lf_vk=w1440-h759'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
