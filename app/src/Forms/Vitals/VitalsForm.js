import React from 'react';
import FormBuilder from "../../form-builder/FormBuilder";
import FormModel from "./FormModel";

class NewVitals extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange = (key, val) => {
    this.vitals.changeField(key, val);
  }

  onSubmit = async () => {
    await this.vitals.saveNewVitals();
    this.props.parentCallBack(this.props.patient.patientId);
  }

  render() {

    return (
      <div>
        <FormBuilder
          data={this.vitals}
          formModel={FormModel}
          parentOnChange={this.onChange}
          parentOnSubmit={this.onSubmit}
          parentOnCancel={this.onCancel}
          submitButtonText="This doesn't work yet, exit without submit!" />
      </div>
    )
  }
}

export default NewVitals;