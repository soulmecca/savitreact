import React, { Component } from "react";
import PropTypes from "prop-types";

import Explore from "./presenter";

class ExploreContainer extends Component {
   state = {
      loading: true
   };

   static PROP_TYPES = {
      getExplore: PropTypes.func.isRequired,
      users: PropTypes.array
   };

   componentDidMount() {
      if (!this.props.users) {
         this.props.getExplore();
      } else {
         this.setState({
            loading: false
         });
      }
   }

   componentWillReceiveProps = nextProps => {
      if (nextProps.users) {
         this.setState({ loading: false });
      }
   };

   render() {
      const { users, uid } = this.props;
      return <Explore {...this.state} users={users} uid={uid} />;
   }
}

export default ExploreContainer;
