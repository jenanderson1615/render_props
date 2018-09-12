import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

const InputDate = ({ field, value, error, parentOnChange, parentOnBlur }) => {
  if (value === null) {
    value = "";
  }
  return (
    <TextField
      type="date"
      error={error}
      onChange={parentOnChange}
      onBlur={parentOnBlur}
      key={field.name}
      margin="normal"
      fullWidth
      name={field.name}
      value={value}
    />
  );
};

InputDate.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputDate);
