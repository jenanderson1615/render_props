import { types } from 'mobx-state-tree';

const UIStore = types
  .model('UIStore', {
    showFormDialog: false
  })

  .actions(self => ({
    toggleFormDialog() {
      self.showFormDialog = !self.showFormDialog;
    }
  }))

export default UIStore;