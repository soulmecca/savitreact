import React, { Component } from "react";

import Feed from "./presenter";

class FeedContainer extends Component {
   state = {
      loading: true
   };

   componentDidMount() {
      const { token } = this.props;

      if (!this.props.posts) {
         this.props.getFeed(token);
      } else {
         this.setState({
            loading: false
         });
      }
   }

   componentWillReceiveProps = nextProps => {
      if (nextProps.posts) {
         this.setState({ loading: false });
      }
   };

   render() {
      const { posts } = this.props;
      return <Feed {...this.state} posts={posts} />;
   }
}

export default FeedContainer;
