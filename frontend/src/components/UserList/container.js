import React from "react";
import UserList from "./presenter";

class UserListContainer extends React.Component {
   state = { loading: true };

   render() {
      return <UserList {...this.props} {...this.state} />;
   }
}

export default UserListContainer;
