import React from "react";
import styles from "./styles.scss";

const Auth = (props, context) => (
   <main className={StyleSheet.auth}>
      <div className={styles.column}>
         <img
            src={require("images/phone.png")}
            alt="Checkout our app. Its cool"
         />
      </div>
      <div className={styles.column}>
         <div className={styles.witeBox} />
         <div className={styles.appBox}>
            <span>Get the app</span>
            <div className={styles.appstores}>
               <img
                  src={require("images/ios.png")}
                  alt="Downlaod it on the Apple Appstroe"
               />
               <img
                  src={require("images/android.png")}
                  alt="Downlaod it on the Appstore"
               />
            </div>
         </div>
      </div>
   </main>
);

export default Auth;
