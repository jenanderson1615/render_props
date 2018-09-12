/**
 * MST Model for any form model that needs options for selects or radios
 * @see FormModel.js
 */

import { types } from "mobx-state-tree";

const OptionsModel = types.model("FormModel", {
  id: types.string,
  name: types.string
});

export default OptionsModel;
