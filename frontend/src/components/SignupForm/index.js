import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import formStyles from "shared/formStyles.scss";

class SignupForm extends React.Component {
   static contextTypes = {
      t: PropTypes.func.isRequired
   };

   renderError = ({ error, touched }) => {
      if (touched && error) {
         return (
            <div>
               <div>{error}</div>
            </div>
         );
      }
   };

   renderInput = ({ input, label, type, meta }) => {
      return (
         <>
            <input
               {...input}
               placeholder={this.context.t(label)}
               type={type}
               autoComplete="off"
               className={formStyles.textInput}
            />
            {this.renderError(meta)}
         </>
      );
   };

   onSubmit = formValues => {
      this.props.onSubmit(formValues);
   };

   render() {
      return (
         <div className={formStyles.formComponent}>
            <h3 className={formStyles.signupHeader}>
               {this.context.t(
                  "Sign up to see photos and videos from your friends."
               )}
            </h3>
            <button className={formStyles.button}>
               <LogoFacebook fontSize="20px" color="white" />
               {this.context.t("Log in with Facebook")}
            </button>

            <span className={formStyles.divider}> or </span>
            <form
               className={formStyles.form}
               onSubmit={this.props.handleSubmit(this.onSubmit)}
               method="post"
            >
               <Field
                  name="email"
                  label="email"
                  type="email"
                  component={this.renderInput}
               />
               <Field
                  name="name"
                  label="name"
                  type="text"
                  component={this.renderInput}
               />
               <Field
                  name="username"
                  label="username"
                  type="username"
                  component={this.renderInput}
               />
               <Field
                  name="password"
                  label="password"
                  type="password"
                  component={this.renderInput}
               />
               <button className={formStyles.button}>Sign up</button>
               <p className={formStyles.terms}>
                  {this.context.t("By signing up, you agree to our")}
                  <span>{this.context.t("Terms & Privacy Policy")}</span>
               </p>
            </form>
         </div>
      );
   }
}

export default reduxForm({
   form: "signupForm"
})(SignupForm);
