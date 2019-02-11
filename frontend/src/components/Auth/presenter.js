import React from "react";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => {
   const renderAuthSection = () => {
      if (props.action === "login") {
         return (
            <p>
               Don't have an account?{" "}
               <span onClick={props.changeAction} className={styles.changeLink}>
                  Sign up
               </span>
            </p>
         );
      } else if (props.action === "signup") {
         return (
            <p>
               Have an account?{" "}
               <span onClick={props.changeAction} className={styles.changeLink}>
                  Log in
               </span>
            </p>
         );
      }
   };

   return (
      <main className={styles.auth}>
         <div className={styles.column}>
            <img
               className={styles.phone}
               src={require("images/phone.png")}
               alt="Checkout our app. Its cool"
            />
         </div>
         <div className={styles.column}>
            <div className={`${styles.whiteBox} ${styles.formBox}`}>
               {props.action === "signup" && (
                  <SignupForm onSubmit={props.onSubmitSignup} />
               )}
               {props.action === "login" && (
                  <LoginForm onSubmit={props.onSubmitLogin} />
               )}
            </div>
            <div className={styles.whiteBox}>{renderAuthSection()}</div>
            <div className={styles.appBox}>
               <span>Get the app</span>
               <div className={styles.appstores}>
                  <img
                     src={require("images/ios.png")}
                     alt="Downlaod it on the Apple Appstore"
                  />
                  <img
                     src={require("images/android.png")}
                     alt="Downlaod it on the Apple Appstore"
                  />
               </div>
            </div>
         </div>
      </main>
   );
};

export default Auth;
