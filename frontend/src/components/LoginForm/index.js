import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import formStyles from "shared/formStyles.scss";

class LoginForm extends React.Component {
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
         <div className={formStyles.textInput}>
            <input
               {...input}
               placeholder={label}
               type={label}
               autoComplete="off"
            />
            {this.renderError(meta)}
         </div>
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
               <button className={formStyles.button}>Submit</button>
            </form>
            <span className={formStyles.divider}>or</span>
            <span className={formStyles.forgotLink}>Forget password?</span>
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
