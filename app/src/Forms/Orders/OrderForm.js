import React, { Component } from "react";
import FormBuilder from "../../form-builder/FormBuilder";
import FormModel from "./FormModel";
import { InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

class OrderForm extends Component {
  /**
   * @var {boolean} showForm Shows form after the api calls have been made
   * @var {boolean} spinner
   * @var {array} formModel Need to rerender the view after form model changes have been made
   */
  state = {
    showForm: false,
    spinner: true,
    showSearch: false,
    success: false
  };

  constructor(props) {
    super(props);
  }

  toggleSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  /**
   * Update state so the form model changes are reflected
   */
  updateState = () => {
    this.setState({ showForm: true, spinner: false });
  };

  /**
   * Updates the form model options after finding the object by the key name
   *
   * @param {string} key
   * @param {string} val
   */
  setFormOptions(key, val) {
    let modelOptions = FormModel.find(m => m.name === key);
    modelOptions.options = val;
  }

  /**
   * Wait for the promise to be fullfilled before we call the parentCallBack
   */
  onSubmit() {
    console.log("submit form");
  };

  render() {
    let { order } = this.props;
    let { showForm } = this.state;

    return (
      <div>
        {showForm && (
          <React.Fragment>
            <FormBuilder
              data={order}
              formModel={FormModel}
              parentOnChange={this.onChange}
              parentOnSubmit={this.onSubmit}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default OrderForm;
