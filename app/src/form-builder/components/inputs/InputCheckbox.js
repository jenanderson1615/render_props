import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { observer } from "mobx-react";

const InputCheckbox = ({ field, value, parentOnChange }) => {
  let onClick = e => {
    return parentOnChange(e);
  };

  let checkbox = () => {
    return <Checkbox checked={value} name={field.name} onClick={onClick} />;
  };

  let checkboxes = () => {
    return <FormControlLabel control={checkbox()} label={field.label} />;

    /*
     // Need to be able to handle multiple checkboxes
    if (!field.options.length) {
      return <FormControlLabel control={checkbox(value,value)} />
    }

    if (field.options.length) {
      
      return field.options.map(option => {
        let checked = Boolean((value) ? value.find(d => d.id == option.id):false);
        
        return (
          <FormControlLabel
            control={checkbox(checked, option.id)}
            label={option.name}
            key={option.id} />
        )
      });
    }
    */
  };

  return <React.Fragment>{checkboxes()}</React.Fragment>;
};

InputCheckbox.propTypes = {
  field: PropTypes.object.isRequired,
  value: PropTypes.bool,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(InputCheckbox);
