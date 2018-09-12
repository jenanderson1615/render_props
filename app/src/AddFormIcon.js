import React from "react";
import UINavAddIcon from "./UIElements/UINavAddIcon";
import NewVitals from "./Forms/Vitals/VitalsForm";
import UIStore from "./UIElements/UIStore";
import UIFormDialog from "./UIElements/UIFormDialog";
import { observer } from "mobx-react";
import OrderForm from "./Forms/Orders/OrderForm";
import ApptForm from "./Forms/Appts/ApptForm";

class AddFormIcon extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      vitalsUIStore: UIStore.create(),
      orderUIStore: UIStore.create(),
      appointmentUIStore: UIStore.create(),
      newPatientUIStore: UIStore.create()
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
      },
      {
        title: "New Appointment",
        parentOnClick: this.store.appointmentUIStore.toggleFormDialog
      }
    ];
  }

  createVitals = () => {
    return (
      <NewVitals
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

        {/* Create Appointment Option */}
        <UIFormDialog
          open={this.store.appointmentUIStore.showFormDialog}
          toggleDialog={this.store.appointmentUIStore.toggleFormDialog}
          title="New Appointment"
          viewPage={() => this.createAppointment()}
        />
      </div>
    );
  }
}
export default observer(AddFormIcon);
