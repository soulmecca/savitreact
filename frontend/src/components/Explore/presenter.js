import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const Explore = props => {
   if (props.loading) {
      return <LoadingExplore />;
   } else if (props.users) {
      return <RenderUsers {...props} />;
   }
};

const LoadingExplore = () => (
   <div className={styles.explore}>
      <Loading />
   </div>
);

const RenderUsers = props => (
   <div className={styles.explore}>
      {props.users.map(user => (
         <UserDisplay
            horizontal={true}
            user={user}
            key={user.id}
            curUid={props.uid}
         />
      ))}
   </div>
);

Explore.propTypes = {
   loading: PropTypes.bool.isRequired
};

export default Explore;
