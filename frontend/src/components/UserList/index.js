import { connect } from "react-redux";
import UserListContainer from "./container";

const mapStateToProps = state => {
   return { users: state.users.list };
};

export default connect(mapStateToProps)(UserListContainer);
