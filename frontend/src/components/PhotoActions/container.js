import React, { Component } from "react";
import PhotoActinos from "./presenter";

class PhotoActionsContainer extends Component {
   render() {
      return <PhotoActinos {...this.props} />;
   }
}

export default PhotoActionsContainer;
