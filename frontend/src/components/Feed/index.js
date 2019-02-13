import { connect } from "react-redux";
import FeedContainer from "./container";
import { getFeed } from "../../redux/actions/photos";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = state => {
   const token = state.auth.token;
   const {
      feed: { posts }
   } = state;
   return { token, posts };
};

export default connect(
   mapStateToProps,
   { getFeed, logout }
)(FeedContainer);
