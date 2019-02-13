import { connect } from "react-redux";
import AuthContainer from "./container";
import { usernameLogin, createAccount } from "../../redux/actions/auth";
import { facebookLogin } from "../../redux/actions/auth";

export default connect(
   null,
   { usernameLogin, createAccount, facebookLogin }
)(AuthContainer);
