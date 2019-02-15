import React from "react";
import UserDisplay from "./presenter";

class UserDisplayContainer extends React.Component {
   render() {
      console.log(this.props);
      return <UserDisplay {...this.props} onButtonClick={this.onButtonClick} />;
   }

   onButtonClick = () => {
      this.props.followingUser(this.props.user);
   };
}

export default UserDisplayContainer;
