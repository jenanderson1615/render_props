import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class AddPatientRecordForm extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { title: "Create Appointment" }

  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default AddPatientRecordForm;