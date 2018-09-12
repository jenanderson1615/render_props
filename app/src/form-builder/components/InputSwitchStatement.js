/**
 * Returns the input type based on the prop field and passes all the props from the parent
 */
import React from "react";
import InputText from "./inputs/InputText";
import InputCheckbox from "./inputs/InputCheckbox";
import InputDate from "./inputs/InputDate";
import InputEmail from "./inputs/InputEmail";
import InputSelect from "./inputs/InputSelect";
import InputTextArea from "./inputs/InputTextArea";
import InputRadio from "./inputs/InputRadio";
import InputPhone from "./inputs/InputPhone";
import InputTime from "./inputs/InputTime";
import InputNumberFormat from "./inputs/InputNumberFormat";

const InputSwitch = props => {
  switch (props.field.type) {
    case "checkbox":
      return <InputCheckbox {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "date":
      return <InputDate {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "time":
      return <InputTime {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "email":
      return <InputEmail {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "phone":
      return <InputPhone {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "radio":
      return <InputRadio {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "select":
      return <InputSelect {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "textarea":
      return <InputTextArea {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    case "numberformat":
      return <InputNumberFormat {...props} />;
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return <InputText {...props} />;
      // eslint-disable-next-line no-unreachable
      break;
  }
};

export default InputSwitch;
