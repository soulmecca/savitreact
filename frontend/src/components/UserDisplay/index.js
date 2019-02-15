import { connect } from "react-redux";
import UserDisplayContainer from "./container";
import { followingUser } from "../../redux/actions/user";

export default connect(
   null,
   { followingUser }
)(UserDisplayContainer);
