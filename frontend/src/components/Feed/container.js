import React, { Component } from "react";
import Feed from "./presenter";

class FeedContainer extends Component {
   state = {
      loading: true
   };

   render() {
      return <Feed {...this.state} />;
   }
}

export default FeedContainer;
