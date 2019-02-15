import { connect } from "react-redux";
import UserListContainer from "./container";

const mapStateToProps = state => {
   const {
      users: { users },
      auth: { uid }
   } = state;
   return { users, uid };

   // return { users: state.users.users };
};

export default connect(mapStateToProps)(UserListContainer);
