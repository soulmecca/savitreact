import { connect } from "react-redux";
import ExploreContainer from "./container";
import { getExplore } from "../../redux/actions/user";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = state => {
   const {
      auth: { uid },
      users: { users }
   } = state;

   return { users, uid };
};

export default connect(
   mapStateToProps,
   { getExplore, logout }
)(ExploreContainer);
