import React, { Component } from "react";
import Auth from "./presenter";

class AuthContainer extends Component {
   state = {
      action: "login"
   };

   render() {
      const { action } = this.state;
      // console.log("@@@@ ", action);
      return <Auth action={action} changeAction={this.changeAction} />;
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
