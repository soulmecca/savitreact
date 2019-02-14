import { connect } from "react-redux";
import FeedPhotoContainer from "./contaner";
import { fetchUserList } from "../../redux/actions/user";

export default connect(
   null,
   { fetchUserList }
)(FeedPhotoContainer);
