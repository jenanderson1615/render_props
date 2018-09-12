import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";

const styles = {
  select: {
    marginTop: 18
  }
};

const InputSelect = ({
  classes,
  field,
  value,
  error,
  parentOnChange,
  parentOnBlur
}) => {
  let options = field.options.map((option, idx) => {
    return (
      <MenuItem value={option.id} key={idx}>
        {option.name}
      </MenuItem>
    );
  });

  /**
   * Need to convert integers to strings so the html select can recognize it
   *
   * Needs to be converted back to an integer in the model
   */
  if (Number.isInteger(value)) {
    value = value.toString();
  }

  return (
    <Select
      error={error}
      className={classes.select}
      onChange={parentOnChange}
      onBlur={parentOnBlur}
      fullWidth
      label={field.label}
      name={field.name}
      value={value}
      displayEmpty
    >
      {options}
    </Select>
  );
};

InputSelect.propTypes = {
  classes: PropTypes.object,
  field: PropTypes.object.isRequired,
  error: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default withStyles(styles)(observer(InputSelect));
