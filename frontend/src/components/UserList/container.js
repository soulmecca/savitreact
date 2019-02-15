import React from "react";
import UserList from "./presenter";

class UserListContainer extends React.Component {
   state = { loading: true };

   componentDidMount() {
      if (this.props.users && this.state.loading) {
         this.setState({ loading: false });
      }
   }

   componentWillUpdate(nextProps) {
      if (nextProps.users && this.state.loading) {
         this.setState({ loading: false });
      }
   }

   render() {
      return <UserList {...this.props} {...this.state} />;
   }
}

export default UserListContainer;
