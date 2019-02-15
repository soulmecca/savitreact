import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const Search = props => {
   if (props.loading) {
      return <LoadingSearch />;
   } else {
   }
};

const LoadingSearch = () => (
   <div className={styles.search}>
      <Loading />
   </div>
);

Search.propTypes = {
   loading: PropTypes.bool.isRequired
};

export default Search;
