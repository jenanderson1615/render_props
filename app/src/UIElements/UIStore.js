import { extendObservable } from "mobx";

class UIStore {
  /**
   * @var { bool } showFormDialog - flag for show/hide ui dialog
   * */

  constructor() {
    extendObservable(this, {
      showFormDialog: false,

      toggleFormDialog:() => {
        this.showFormDialog = !this.showFormDialog;
      }
    });
  }
}

export default UIStore;
