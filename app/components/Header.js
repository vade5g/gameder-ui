import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="jumbotron center">
          <img className='logo-img img-responsive center-block ' src='https://lh3.googleusercontent.com/IuD3CceUxSc94oDRnIz6I5yVeHcciMMzvuHROcKkTXXZ_4DYadTfZmjv22dxnXCNdcrWO9n2zyz4Um8=w1440-h803'></img>
          <p>Tinder for Gamers</p>
        </div>
      </div>
    );
  }
}
