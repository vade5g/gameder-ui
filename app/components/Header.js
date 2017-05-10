import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://lh3.googleusercontent.com/J8c8eoKd0rX_pszq2gZr29gU6uFC9BN1f8dY_LnxyTvDyCffaqj26lHbhNNwjn2IAUjqFCudsAkLFug=w2648-h1926'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
