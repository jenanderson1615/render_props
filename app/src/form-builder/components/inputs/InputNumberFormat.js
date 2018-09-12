import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      decimalSeparator="false"
      onValueChange={(values, e) => {
        onChange({
          target: {
            value: values.value,
            name: e.target.name
          }
        });
      }}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const InputNumberFormat = ({
  field,
  value,
  error,
  parentOnChange,
  parentOnBlur
}) => {
  if (Number.isInteger(value)) {
    value = value.toString();
  }

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
      autoComplete="off"
      InputProps={{ inputComponent: NumberFormatCustom, ...field.InputProps }}
      inputProps={field.inputProps}
    />
  );
};

InputNumberFormat.propTypes = {
  field: PropTypes.object.isRequired,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputNumberFormat);
