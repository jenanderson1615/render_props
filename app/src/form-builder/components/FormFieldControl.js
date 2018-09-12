/**
 * Iterates over the form fields and returns the input type, label and error message
 */
import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputSwitchStatement from "./InputSwitchStatement";
import { Grid } from "@material-ui/core";

const styles = {
  formLabel: {
    textAlign: "left",
    marginBottom: -8
  }
};

const FormFieldControl = ({ classes, field, data, parentOnChange }) => {
  /**
   * Called when a child input component gets changed.
   *
   * Sets the key, value from the input target and calls the parent change
   *
   * @param {Object} e
   */
  let onChange = e => {
    let key = e.target.name;
    let val = e.target.value;

    // set val to boolean of checked
    if (e.target.type === "checkbox") {
      val = e.target.checked;
    }
    if (field.type === "select") {
      if (val === "0" || !val) {
        parentOnChange(field.name, "");
      } else {
        let option = field.options.find(o => o.id === val);
        if (option) parentOnChange(field.name, option.name);
      }
    }
    parentOnChange(key, val);
  };

  let zipOnChange = (fullResult, e) => {
    data.updateAddress(fullResult);
  };

  /* The downshift library doesn't create an event when selecting an item.  Instead it returns the selected item */
  let autoCompleteOnChange = (name, selectedResult) => {
    parentOnChange(name, selectedResult);
  };

  // Material UI error prop expects a bool
  let error = field.errorMessage ? true : false;
  let value = "field value";
  if (value === null || value === undefined) {
    value = "";
  }

  return (
    <FormControl
      required={field.required}
      error={error}
      margin="normal"
      fullWidth
      component="fieldset"
      key={field.name}
    >
      {field.type !== "checkbox" && (
        <FormLabel className={classes.formLabel} component="legend">
          {field.label}
        </FormLabel>
      )}

      <InputSwitchStatement
        field={field}
        error={error}
        value={value}
        parentOnBlur={() => field.validate(data)}
        parentOnChange={onChange}
        zipOnChange={zipOnChange}
        autoCompleteOnChange={autoCompleteOnChange}
      />

      {field.errorMessage && (
        <FormHelperText>{field.errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

FormFieldControl.propTypes = {
  classes: PropTypes.object,
  field: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  parentOnChange: PropTypes.func.isRequired
};

export default withStyles(styles)(observer(FormFieldControl));
