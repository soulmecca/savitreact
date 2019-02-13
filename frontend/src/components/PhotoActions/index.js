import { connect } from "react-redux";
import { likePhoto, unlikePhoto } from "../../redux/actions/photos";
import PhotoActionsContainer from "./container";

export default connect(
   null,
   { likePhoto, unlikePhoto }
)(PhotoActionsContainer);
