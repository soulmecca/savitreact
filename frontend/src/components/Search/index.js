import { connect } from "react-redux";
import SearchContainer from "./container";
import { searchByTerm } from "../../redux/actions/user";

const mapStateToProps = (state, ownProps) => {
   const {
      users: { posts, users }
   } = state;
   return {
      users,
      posts
   };
};

export default connect(
   mapStateToProps,
   { searchByTerm }
)(SearchContainer);
