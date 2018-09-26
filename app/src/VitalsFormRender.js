import React from "react";
import VitalsForm from "./Forms/Vitals/VitalsForm";

class VitalsFormRender extends React.Component {

  constructor(props) {
    super(props);
    this.title =  "Create Vitals"
  }

  createVitals = () => {
    return (
      <VitalsForm
        parentCallBack={this.formCallBack}
        patient={this.props.patient}
      />
    );
  };

  formCallBack = patientId => {
    this.props.navigationMethod(patientId);
  };

  render() {
    return (
      <div>
        {this.props.render({
          title: this.title,
          form: this.createVitals
        })}
      </div>
    );
  }
}

export default VitalsFormRender;
