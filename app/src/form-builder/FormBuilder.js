/**
 * HOC called from another component to build out a form based on the model data
 * provided in the prop
 *
 * @see PropTypes below
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { Button, Grid } from "@material-ui/core";
import FormStore from "./FormStore";
import FormFields from "./components/FormFields";

class FormBuilder extends Component {
  constructor(props) {
    super(props);

    // create a MST store from the form model prop
    this.formStore = FormStore.create({ fields: props.formModel });
  }

  /**
   * Submit the form
   *
   * @param {Object} e: Form dom object
   */
  onSubmit = e => {
    e.preventDefault();
    e.persist();
    this.formStore.validateAllFields(this.props.data);

    // call parent submit if applicable
    if (
      this.formStore.isValid() &&
      typeof this.props.parentOnSubmit === "function"
    ) {
      this.props.parentOnSubmit(e);
    }
  };

  /**
   * Determines whether or not to show a cancel button
   *
   * @return {Boolean}
   */
  showCancel = () => {
    return typeof this.props.parentOnCancel === "function";
  };

  /**
   * Resets the form store and calls parent function if applicable
   */
  onCancel = () => {
    //Form store doesn't have any reset function, need to discuss with devs to implement.
    //this.formStore.reset();
    return this.showCancel ? this.props.parentOnCancel() : false;
  };

  // ----------------------------------------------------------

  render() {
    let { data, parentOnChange, submitButtonText, formName } = this.props;
    let fields = this.formStore.fields;

    return (
      <form onSubmit={this.onSubmit} name={formName} noValidate>
        <Grid container spacing={8} alignItems="flex-start">
          <FormFields
            fields={fields}
            data={data}
            parentOnChange={parentOnChange}
          />
        </Grid>
        <Button variant="raised" color="primary" type="submit" fullWidth>
          {submitButtonText || "Submit"}
        </Button>
      </form>
    );
  }
}

FormBuilder.propTypes = {
  formModel: PropTypes.array.isRequired,
  submitButtonText: PropTypes.string,
  parentOnChange: PropTypes.func.isRequired,
  parentOnSubmit: PropTypes.func,
  parentOnCancel: PropTypes.func
};

export default observer(FormBuilder);
