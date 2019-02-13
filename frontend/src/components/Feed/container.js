import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeed } from "../../redux/actions/photos";
import { logout } from "../../redux/actions/auth";
import Feed from "./presenter";

class FeedContainer extends Component {
   state = {
      loading: true
   };

   async componentWillMount() {
      const { token } = this.props;
      // console.log(token);
      const response = await this.props.getFeed(token);

      // if (this.props) {

      //    console.log(this.props.token);
      //    // this.props.getFeed(this.props.token);
      // }
   }

   render() {
      return <Feed {...this.state} />;
   }
}

const mapStateToProps = state => {
   const token = state.auth.token;
   return { token };
};

export default connect(
   mapStateToProps,
   { getFeed, logout }
)(FeedContainer);
