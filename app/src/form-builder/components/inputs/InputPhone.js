/**
 * Provides a masked input for a 10-digit phone number
 *
 * Returns format 123-456-7890
 *
 * Need to accomodate international numbers?
 */

import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const styles = {
  maskedInput: {
    fontSize: 15,
    outline: "none",
    border: 0,
    marginTop: 16,
    marginBottom: 8,
    color: "#222"
  }
};

/**
 * Evaluates keyCode to determine if the code is a dash or a number
 *
 * @param {Number} key
 * @return {Boolean} | true if it is a number or dash, false otherwise
 */
const isNumOrDash = key => {
  return key !== 46 && key !== 45 && key > 31 && (key < 48 || key > 57)
    ? false
    : true;
};

const InputPhone = ({
  classes,
  field,
  value,
  error,
  parentOnChange,
  parentOnBlur
}) => {
  /**
   * Prevents anything but numbers or dashes from being typed
   *
   * @param {Object} e
   */
  let testCharacter = e => {
    if (!isNumOrDash(e.keyCode)) {
      e.preventDefault();
    }
  };

  /**
   * Automatically formats US phone number to xxx-xxx-xxxx
   */

  let addFormatting = e => {
    let val = e.target.value;
    let newVal = val;

    if (val.length === 3 || val.length === 7) {
      if (e.key === "Backspace") {
        newVal = val.slice(0, -1);
      } else {
        newVal = val + "-";
      }
    }

    e.target.value = newVal;
    parentOnChange(e);
  };

  /**
   * Make sure the phone gets formatted on blur.  More for mobile devices
   *
   * @param {Object} e
   */

  let formatPhone = e => {
    e.target.value = e.target.value.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    if (typeof parentOnBlur === "function") {
      parentOnBlur();
    }
  };

  return (
    <TextField
      className={classes.maskedInput}
      length="12"
      type="tel"
      error={error}
      name={field.name}
      defaultValue={value}
      onKeyDown={testCharacter}
      onKeyUp={addFormatting}
      onBlur={formatPhone}
      fullWidth
      inputProps={{
        maxLength: 12
      }}
    />
  );
};

InputPhone.propTypes = {
  classes: PropTypes.object,
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default withStyles(styles)(observer(InputPhone));
