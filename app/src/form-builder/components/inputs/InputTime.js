import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

const InputTime = ({ field, value, error, parentOnChange, parentOnBlur }) => {
  if (value === null || value === "undefined") {
    value = "";
  }

  return (
    <TextField
      type="time"
      error={error}
      name={field.name}
      onBlur={parentOnBlur}
      onChange={parentOnChange}
      value={value}
      margin="normal"
      fullWidth
    />
  );
};

InputTime.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputTime);
