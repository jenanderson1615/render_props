import React from "react";
import FormBuilder from "../../form-builder/FormBuilder";
import FormModel from "./FormModel";

class ApptForm extends React.Component {
  state = { saving: false, loading: true, showSearchDialog: false };
  constructor(props) {
    super(props);
    this.resourceOptions = [{ id: "", name: "None" }];
    this.typeOptions = [{ id: "0", name: "None" }];
    this.statusOptions = [{ id: "0", name: "None" }];
    this.providerOptions = [{ id: "0", name: "None" }];
  }

  toggleSearchDialog = () => {
    this.setState({
      showSearchDialog: !this.state.showSearchDialog
    });
  };

  onSubmit() {
    console.log("form submitted");
  };

  render() {
    let { saving, loading } = this.state;
    return (
      <div>
        {!saving &&
          !loading && (
            <React.Fragment>
              <FormBuilder
                data={this.props.appt}
                formModel={FormModel(this)}
                parentOnChange={this.onChange}
                parentOnSubmit={this.onSubmit}
              />
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default ApptForm;
