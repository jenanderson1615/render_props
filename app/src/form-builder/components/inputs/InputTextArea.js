import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

const InputTextArea = ({
  field,
  value,
  error,
  parentOnChange,
  parentOnBlur
}) => {
  return (
    <TextField
      onBlur={parentOnBlur}
      multiline={true}
      error={error}
      onChange={parentOnChange}
      margin="normal"
      fullWidth
      placeholder={field.placeholder}
      name={field.name}
      rows={field.rows || 4}
      rowsMax={11}
      defaultValue={value}
      inputProps={field.inputProps}
      InputProps={field.InputProps}
    />
  );
};

InputTextArea.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputTextArea);
