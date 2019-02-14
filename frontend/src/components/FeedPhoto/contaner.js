import React from "react";
import FeedPhoto from "./presenter";

class FeedPhotoContainer extends React.Component {
   state = {
      seeingLikes: false
   };

   render() {
      return (
         <FeedPhoto
            {...this.props}
            {...this.state}
            openLikes={this.openLikes}
            closeLikes={this.closeLikes}
         />
      );
   }

   openLikes = () => {
      this.setState({ seeingLikes: true });
   };

   closeLikes = () => {
      this.setState({ seeingLikes: false });
   };
}

export default FeedPhotoContainer;
