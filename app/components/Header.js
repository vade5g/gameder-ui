import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://lh3.googleusercontent.com/qhJn3j80btJluZqqTX9wELE9TPJXs04RGwwNwUbRUJ8Y5W8vLRPiL0Gdxb0uqWXn5F8oDGnCUeetQ7s=w1440-h759'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
