import { types, getSnapshot } from "mobx-state-tree";
import FormModel from "./models/FormModel";

const FormStore = types
  .model("FormStore", {
    /**
     * @var {Array} inputs: Form field inputs
     */
    fields: types.array(FormModel)
  })

  .actions(self => ({
    /**
     * Called from the component to validate a form submission
     *
     * @param {Object} data: data submitted from the form
     */

    validateAllFields(data) {
      // iterate over fields to validate
      self.fields.forEach(field => {
        field.validate(data);
      });
    }
  }))

  .views(self => ({
    /**
     * Return a serialized array of the store fields
     *
     * @return {Array}
     */

    getFields() {
      return getSnapshot(self.fields);
    },

    /**
     * Called from component to handle submission when the data is valid
     *
     * @return {Boolean}
     */

    isValid() {
      if (self.fields.filter(f => f.errorMessage).length === 0) {
        return true;
      }
      return false;
    }
  }));

export default FormStore;
