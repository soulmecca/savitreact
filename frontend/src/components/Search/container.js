import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class SearchContainer extends Component {
   state = {
      loading: true
   };

   static propTypes = {
      searchByTerm: PropTypes.func.isRequired,
      users: PropTypes.array,
      posts: PropTypes.array
   };

   componentDidMount() {
      const {
         match: {
            params: { term }
         }
      } = this.props;
      this.props.searchByTerm(term);
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.users && nextProps.posts) {
         this.setState({
            loading: false
         });
      }
   }

   render() {
      const { users, posts } = this.props;
      return <Search {...this.state} users={users} posts={posts} />;
   }
}

export default SearchContainer;
