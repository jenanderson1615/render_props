import React from "react";
import UINavAddIcon from "./UIElements/UINavAddIcon";
import UIStore from "./UIElements/UIStore";
import UIFormDialog from "./UIElements/UIFormDialog";
import { observer } from "mobx-react";
import VitalsFormRender from "./VitalsFormRender";

class AddFormIcon extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      vitalsUIStore: UIStore
    };
  }

  menuItems() {
    return [
      {
        title: "New Vitals",
        parentOnClick: this.store.vitalsUIStore.toggleFormDialog
      }
    ];
  }

  render() {
    let showFormDialog = this.store.vitalsUIStore.showFormDialog;
    return (
      <div>
        <UINavAddIcon menuOptions={this.menuItems()} />
        <VitalsFormRender
          render={({ title, form }) => (
            <UIFormDialog
              open={showFormDialog}
              toggleDialog={this.store.vitalsUIStore.toggleFormDialog}
              title={title}
              viewPage={form}
            />
          )}
        />
      </div>
    );
  }
}
export default observer(AddFormIcon);
