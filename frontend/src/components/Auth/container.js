import React, { Component } from "react";
import Auth from "./presenter";

class AuthContainer extends Component {
   state = {
      action: "login"
   };

   render() {
      const { action } = this.state;
      return <Auth action={action} chnageAction={this.changeAction} />;
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
}

export default AuthContainer;
