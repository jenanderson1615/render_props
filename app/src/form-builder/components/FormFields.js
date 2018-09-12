/**
 * Iterates over the form fields and returns the input type, label and error message
 */
import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import FormFieldControl from "./FormFieldControl";

const FormFields = ({ fields, data, parentOnChange }) => {
  let hasError = fields.find(f => f.errorMessage !== null) ? true : false;
  let formFieldItems = fields.map((field, idx) => {
    if (!field.hidden) {
      return (
        <FormFieldControl
          key={idx}
          field={field}
          data={data}
          parentOnChange={parentOnChange}
        />
      );
    }
  });

  return (
    <React.Fragment>
      {formFieldItems}
    </React.Fragment>
  );
};

FormFields.propTypes = {
  fields: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(FormFields);
