import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import { Field } from "redux-form";

import { Link } from "react-router-dom";
import styles from "./styles.scss";

class Navigation extends React.Component {
   static contextTypes = {
      t: PropTypes.func.isRequired
   };

   onSubmit = formValues => {
      this.props.onSubmit(formValues);
   };

   renderInput = ({ input, label, meta }) => {
      return (
         <input
            {...input}
            placeholder={this.context.t(label)}
            type="text"
            autoComplete="off"
            className={styles.searchInput}
         />
      );
   };

   render() {
      return (
         <div className={styles.navigation}>
            <div className={styles.inner}>
               <div className={styles.column}>
                  <Link to="/">
                     <img
                        src={require("images/logo.png")}
                        className={styles.logo}
                        alt={this.context.t("Logo")}
                     />
                  </Link>
               </div>
               <div className={styles.column}>
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                     <Field
                        name="search"
                        component={this.renderInput}
                        label="Search"
                     />
                  </form>
               </div>
               <div className={styles.column}>
                  <div className={styles.navIcon}>
                     <Link to="/explore">
                        <IosCompassOutline fontSize="28px" color="black" />
                     </Link>
                  </div>
                  <div className={styles.navIcon}>
                     <IosHeartOutline fontSize="28px" color="black" />
                  </div>
                  <div className={styles.navIcon}>
                     <Link to="/profile">
                        <IosPersonOutline fontSize="32px" color="black" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Navigation;
