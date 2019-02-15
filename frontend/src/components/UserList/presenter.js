import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const UserList = props => (
   <div className={styles.container}>
      <div className={styles.box}>
         <header className={styles.header}>
            <h4 className={styles.title}>{props.title}</h4>
            <span onClick={props.closeLikes}>
               <MdClose fontSize="20px" color="black" />
            </span>
         </header>
         <div className={styles.content}>
            {props.loading ? <Loading /> : <RenderUsers users={props.users} />}
         </div>
      </div>
   </div>
);

const RenderUsers = props =>
   props.users.map(user => (
      <UserDisplay horizontal={true} user={user} key={user.id} />
   ));

UserList.propTypes = {
   title: PropTypes.string.isRequired,
   loading: PropTypes.bool.isRequired,
   users: PropTypes.array,
   closeLikes: PropTypes.func.isRequired
};

export default UserList;
