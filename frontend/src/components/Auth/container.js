import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./presenter";
import { usernameLogin, createAccount } from "../../redux/actions/auth";

class AuthContainer extends Component {
   state = {
      action: "signup"
   };

   render() {
      const { action } = this.state;

      return (
         <Auth
            action={action}
            changeAction={this.changeAction}
            onSubmitLogin={this.onSubmitLogin}
            onSubmitSignup={this.onSubmitSignup}
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
      usernameLogin(username, password);
   };
   onSubmitSignup = ({ username, password, email, name }) => {
      createAccount(username, password, email, name);
   };
}

export default connect(
   null,
   { usernameLogin, createAccount }
)(AuthContainer);
