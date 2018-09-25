import React from "react";
import UINavAddIcon from "./UIElements/UINavAddIcon";
import VitalsForm from "./Forms/Vitals/VitalsForm";
import UIStore from "./UIElements/UIStore";
import UIFormDialog from "./UIElements/UIFormDialog";
import { observer } from "mobx-react";
import OrderForm from "./Forms/Orders/OrderForm";
import ApptForm from "./Forms/Appts/ApptForm";
import AddPatientRecordForm from "./AddPatientRecordForm";

class AddFormIcon extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      vitalsUIStore: new UIStore(),
      orderUIStore: new UIStore(),
      appointmentUIStore: new UIStore(),
      newPatientUIStore: new UIStore()
    };
  }

  menuItems() {
    return [
      {
        title: "New Vitals",
        parentOnClick: this.store.vitalsUIStore.toggleFormDialog
      },
      {
        title: "New Order",
        parentOnClick: this.store.orderUIStore.toggleFormDialog
      }
    ];
  }

  createVitals = () => {
    return (
      <VitalsForm
        parentCallBack={this.formCallBack}
        patient={this.props.patient}
      />
    );
  };

  createOrder = () => {
    return <OrderForm parentCallBack={() => this.viewCreatedOrder()} />;
  };

  createAppointment = () => {
    return (
      <ApptForm
        parentCallBack={this.formCallBack}
      />
    );
  };

  formCallBack = patientId => {
    this.props.navigationMethod(patientId);
  };

  viewCreatedOrder = () => {
    this.props.history.push("/orders");
  };

  render() {
    return (
      <div>
        <UINavAddIcon menuOptions={this.menuItems()} />

        {/* Create Vitals Option */}
        <UIFormDialog
          open={this.store.vitalsUIStore.showFormDialog}
          toggleDialog={this.store.vitalsUIStore.toggleFormDialog}
          title="Create Vitals"
          viewPage={() => this.createVitals()}
        />

        {/* Create Order Option */}
        <UIFormDialog
          open={this.store.orderUIStore.showFormDialog}
          toggleDialog={this.store.orderUIStore.toggleFormDialog}
          title="New Order"
          viewPage={() => this.createOrder()}
        />
       
         <AddPatientRecordForm render={({ title }) => (
          // The render prop gives us the state we need
          // to render whatever we want here.
          <h1>{title}</h1>
        )}/>
      </div>
    );
  }
}
export default observer(AddFormIcon);
