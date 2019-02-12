import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

class LoginForm extends React.Component {
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

   renderInput = ({ input, label, meta }) => {
      return (
         <>
            <input
               {...input}
               placeholder={this.context.t(label)}
               type={label === "password" ? "password" : ""}
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
            <form
               className={formStyles.form}
               onSubmit={this.props.handleSubmit(this.onSubmit)}
               method="post"
            >
               <Field
                  name="username"
                  component={this.renderInput}
                  label="Username"
               />
               <Field
                  name="password"
                  component={this.renderInput}
                  label="password"
               />
               <button className={formStyles.button}>
                  {this.context.t("Log in")}
               </button>
            </form>
            <span className={formStyles.divider}>{this.context.t("or")}</span>
            <FacebookLogin
               appId="2375402692691732"
               autoLoad={false}
               fields="name,email,picture"
               callback={this.props.handleFacebookLogin}
               cssClass={formStyles.facebookLink}
               icon="fa-facebook-official"
               textButton={this.context.t("Log in with Facebook")}
            />
            <span className={formStyles.forgotLink}>
               {this.context.t("Forget password?")}
            </span>
         </div>
      );
   }
}

// LoginForm.propTypes = {
//    handleInputChange: PropTypes.func.isRequired,
//    usernameValue: PropTypes.string.isRequired,
//    passwordValue: PropTypes.string.isRequared,
//    handleSubmit: PropTypes.func.isRequired
// };

export const validate = formValues => {
   const errors = {};
   if (!formValues.username) {
      errors.username = "You must enter a username";
   }
   if (!formValues.password) {
      errors.password = "You must enter a password";
   }

   return errors;
};

export default reduxForm({
   form: "loginForm",
   validate
})(LoginForm);
