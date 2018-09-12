import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

const InputEmail = ({ field, value, error, parentOnChange, parentOnBlur }) => {
  return (
    <TextField
      onBlur={parentOnBlur}
      type="email"
      required={field.required}
      onChange={parentOnChange}
      error={error}
      key={field.name}
      margin="normal"
      fullWidth
      name={field.name}
      value={value}
    />
  );
};

InputEmail.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputEmail);
