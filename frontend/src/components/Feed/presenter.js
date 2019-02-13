import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import FeedPhoto from "../FeedPhoto";

const Feed = props => {
   if (props.loading) {
      return <LoadingFeed />;
   } else if (props.posts) {
      return <RenderPosts {...props} />;
   }
};

const LoadingFeed = props => (
   <div className={styles.feed}>
      <Loading />
   </div>
);

const RenderPosts = props => (
   <div className={styles.feed}>
      {" "}
      {props.posts.map(post => (
         <FeedPhoto {...post} key={post.id} />
      ))}
   </div>
);

Feed.propTypes = {
   loading: PropTypes.bool.isRequired
};

export default Feed;
