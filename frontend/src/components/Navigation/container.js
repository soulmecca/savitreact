import React, { Component } from "react";
import Navigation from "./presenter";
import { reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class NavigationContainer extends Component {
   static propTypes = {};

   render() {
      return (
         <Navigation
            {...this.state}
            onSubmit={this.onSubmit}
            handleSubmit={this.props.handleSubmit}
         />
      );
   }

   onSubmit = term => {
      console.log(term);
      this.props.history.push(`/search/${term.search}`);
      // this.props.reset("navForm");
   };
}

// export default NavigationContainer;
export default reduxForm({
   form: "navForm"
   // validate
})(withRouter(NavigationContainer));
