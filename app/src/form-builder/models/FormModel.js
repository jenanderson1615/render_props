/**
 * MST model for the form builder to adhere to.
 * Any form model built to use with formbuilder will need to follow these props types
 */

import { types } from "mobx-state-tree";
import OptionsModel from "./OptionsModel";

const FormModel = types
  .model("FormModel", {
    type: types.string,
    name: types.string,
    label: types.string,
    placeholder: types.optional(types.string, ""),
    required: types.optional(types.boolean, false),
    disabled: types.optional(types.boolean, false),
    options: types.optional(types.array(OptionsModel), []),
    rows: types.optional(types.number, 3),
    isBool: types.optional(types.boolean, false),
    errorMessage: types.maybe(types.string),
    hidden: types.optional(types.boolean, false)
  })
  .actions(self => ({
    /**
     * Called when the field end editing to validate the field data
     *
     * @param {Object} data: data submitted from the form
     */
    validate(data) {
      // reset error message on field
      self.errorMessage = null;

      // assign value by field name and remove white spaces
      let value = data[self.name];
      if (value && typeof value === "string") {
        value = value.trim();
      }

      // validate data
      self._checkRequired(value);
      self._checkEmail(value);
      self._checkPhoneLength(value);
    },

    /**
     * Makes sure there is a value if the field is required
     *
     * @param {String} value
     */
    _checkRequired(value) {
      if (self.required === true) {
        var isValid = true;
        if ((self.type === "select" && value === "0") || value === "") {
          isValid = false;
        }
        if (!value) isValid = false;
        if (!isValid) self.errorMessage = "Required field";
      }
    },

    /**
     * Validates email by checking for the '@' and '.' in the string
     *
     * Javascript email validation is not 100%
     *
     * @param {String} email
     */
    _checkEmail(email) {
      if (self.type === "email" && email) {
        let regEx = /\S+@\S+\.\S+/;

        if (!regEx.test(email)) {
          self.errorMessage = "Invalid email";
        }
      }
    },

    /**
     * Validates that the phone number is a 10-digit number by stripping out everything
     * but numbers
     *
     * @param {String} phone
     */
    _checkPhoneLength(phone) {
      if (self.type === "phone" && phone) {
        if (phone.replace(/\D/g, "").length !== 10) {
          self.errorMessage = "Number needs to be 10 digits";
        }
      }
    }
  }));

export default FormModel;
