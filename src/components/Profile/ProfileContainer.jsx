import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, resetIsLoading} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

  componentDidMount() {
    if (this.props.isAuth === false) {

      this.props.history.push("/login");
    } else {
      this.props.getUserProfile(this.props.authorizedUserId);
    }
    this.props.resetIsLoading();
  }

  render() {
    return <>
      {this.props.isLoading
        ? <Preloader/>
        : <Profile profile={this.props.profile}/>
      }
    </>
  }
}

let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isLoading: state.profilePage.isLoading
  })
}

export default compose(
  connect(mapStateToProps, {getUserProfile, resetIsLoading}),
  withRouter
)(ProfileContainer);




