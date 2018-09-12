import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

const InputText = ({ field, value, error, parentOnChange, parentOnBlur }) => {
  return (
    <TextField
      error={error}
      onChange={parentOnChange}
      onBlur={parentOnBlur}
      margin="normal"
      fullWidth
      name={field.name}
      value={value}
      disabled={field.disabled}
      InputProps={field.InputProps}
      placeholder={field.placeholder}
    />
  );
};

InputText.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputText);
