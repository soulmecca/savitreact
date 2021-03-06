import React, { Component } from "react";
import Auth from "./presenter";

class AuthContainer extends Component {
   state = {
      action: "login"
   };

   render() {
      const { action } = this.state;

      return (
         <Auth
            action={action}
            changeAction={this.changeAction}
            onSubmitLogin={this.onSubmitLogin}
            onSubmitSignup={this.onSubmitSignup}
            handleFacebookLogin={this.handleFacebookLogin}
         />
      );
   }

   changeAction = () => {
      this.setState(prevState => {
         const { action } = prevState;
         if (action === "login") {
            return { action: "signup" };
         } else if (action === "signup") {
            return { action: "login" };
         }
      });
   };

   onSubmitLogin = ({ username, password }) => {
      this.props.usernameLogin(username, password);
   };

   onSubmitSignup = ({ username, password, email, name }) => {
      this.props.createAccount(username, password, email, name);
   };

   handleFacebookLogin = response => {
      const { accessToken } = response;
      this.props.facebookLogin(accessToken);
   };
}

export default AuthContainer;
