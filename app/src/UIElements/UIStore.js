import { extendObservable } from "mobx";

class Store {
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

const UIStore = new Store();
export default UIStore;
