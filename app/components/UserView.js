import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const UserShape = {
  name: PropTypes.string,
  img: PropTypes.string
};

class UserView extends Component {
  render(){
    const name = this.props.user.name;
    const img = this.props.user.img;
    return(
      <div >
        <div className='img-view'>
          <img src={`${img}`} className="img-rounded img-responsive center-block" alt="Cinque Terre"/>
        </div>
        <div className="center">
<<<<<<< HEAD
        <h3>{`Username: ${name}`}</h3>
=======
        <h3 className="username">{`Username: ${name}`}</h3>
>>>>>>> dbaecd94959edaacbfc122bcd7c8b67a22ac731a
          <Button className='btn-circle no' style="danger" onClick={this.props.onDenyClick}>No</Button>
          <Button className='btn-circle yes' style="success" onClick={this.props.onSuccessClick}>Yes</Button>
        </div>
      </div>
    );
  }
}

UserView.propTypes = {
  user: PropTypes.shape(UserShape),
};

export default UserView;

export {
  UserShape,
};
