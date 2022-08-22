import React, {Component} from 'react';
import LoginUI from './LoginUI';
import {IUser} from '../../../models/User';
import {connect} from 'react-redux';
import {setLoggedUser} from '../../../redux/slices/UserSlice';
import validator from 'validator';
import NavigationConstant from '../../../navigation/NavigationConstant';

const mapStateToProps = (state: any) => {
  return {
    loggedUser: state.user.loggedUser,
  };
};

const mapDispatchToProps = {
  setLoggedUser,
};

class Login extends Component {
  state = {
    user: '',
    email: '',
    visible: false,
    text: '',
  };

  componentDidMount() {
    if (this.props.loggedUser.name) {
      this.props.navigation.push(NavigationConstant.NAVIGATOR.LANDING_FLOW);
    }
  }
  private _handleCaptureData = (data: {name: string; value: string}) => {
    const {name, value} = data;
    this.setState({...this.state, [name]: value});
  };

  private _handleConfirm = async () => {
    const {user, email} = this.state;
    const validateMail = validator.isEmail(email);
    if (user === '') {
      this.setState({
        ...this.state,
        text: 'El nombre es obligatorio',
        visible: true,
      });
      return;
    }
    if (!validateMail) {
      this.setState({
        ...this.state,
        visible: true,
        text: 'Ingresá un email con un formato válido',
      });
      return;
    }
    const loggedUser: IUser = {
      name: user,
      email: email,
    };
    await this.props.setLoggedUser(loggedUser);
    this.props.navigation.push(NavigationConstant.NAVIGATOR.LANDING_FLOW);
  };
  private _handleSetVisible = () => {
    this.setState({...this.state, visible: false});
  };

  render() {
    return (
      <LoginUI
        handleConfirm={this._handleConfirm}
        handleCaptureData={this._handleCaptureData}
        text={this.state.text}
        isVisible={this.state.visible}
        setVisible={this._handleSetVisible}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
