import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio, { RadioGroup } from "@material-ui/core/Radio";
import { observer } from "mobx-react";

const InputRadio = ({ field, value, parentOnChange }) => {
  let radiobuttons = () => {
    return field.options.map(option => {
      return (
        <FormControlLabel
          key={option.id}
          value={option.id}
          control={<Radio color="primary" />}
          label={option.name}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <RadioGroup name={field.name} value={value} onChange={parentOnChange}>
        {radiobuttons()}
      </RadioGroup>
    </React.Fragment>
  );
};

InputRadio.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.string,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputRadio);
