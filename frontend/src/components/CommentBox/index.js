import { connect } from "react-redux";
import CommentBoxContainer from "./container";
import { createComment } from "../../redux/actions/photos";

export default connect(
   null,
   { createComment }
)(CommentBoxContainer);
