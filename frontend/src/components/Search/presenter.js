import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";

const Search = (props, context) => {
   return (
      <div className={styles.search}>
         <div className={styles.section}>
            <h4 className={styles.title}>{context.t("Users")}</h4>
            {props.loading && <LoadingSearch />}
            {!props.loading && props.users.length < 1 && (
               <NotFound text={context.t("Nothing found")} />
            )}
            <div className={styles.content}>
               {!props.loading && props.users.length > 0 && (
                  <RenderUserSearch users={props.users} />
               )}
            </div>
         </div>
         <div className={styles.section}>
            <h4 className={styles.title}>{context.t("Images")}</h4>
            {props.loading && <LoadingSearch />}
            {!props.loading && props.posts.length < 1 && (
               <NotFound text={context.t("Nothing found")} />
            )}
            <div className={styles.content}>
               {!props.loading && props.posts.length > 0 && (
                  <RenderImageSearch posts={props.posts} />
               )}
            </div>
         </div>
      </div>
   );
};

const LoadingSearch = () => (
   <div className={styles.search}>
      <Loading />
   </div>
);

const RenderUserSearch = props =>
   props.users.map(user => (
      <UserDisplay vertical={true} user={user} key={user.id} />
   ));

const RenderImageSearch = props => {
   console.log(props.posts);
   return props.posts.map(post => <PhotoDisplay photo={post} key={post.id} />);
};

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

Search.contextTypes = {
   t: PropTypes.func.isRequired
};

Search.propTypes = {
   loading: PropTypes.bool.isRequired
};

export default Search;
