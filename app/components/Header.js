import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://lh6.googleusercontent.com/fTR_mxOSHw-L9TWuOXEB6sVdUw45wOIs8C_Pgb0wRUUfxi2xbvsWfuTYNNk1qtskc1MFrFS9L4QLGQ4=w2648-h1926'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
