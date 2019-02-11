import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./presenter";
import { usernameLogin } from "../../redux/actions/auth";

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
            onSubmit={this.onSubmit}
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

   onSubmit = ({ username, password }) => {
      usernameLogin(username, password);
   };
}

export default connect(
   null,
   { usernameLogin }
)(AuthContainer);
