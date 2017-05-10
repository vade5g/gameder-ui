import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://ibin.co/3LzWDPPXBcpa.png'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
