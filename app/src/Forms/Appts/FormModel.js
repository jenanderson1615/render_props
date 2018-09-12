import React from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const FormModel = parent => {
  let patientSearchDisabled = parent.props.appt.appointmentId > 1;
  return [
    {
      name: "patientName",
      label: "Patient",
      type: "text",
      disabled: true,
      required: true,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              disabled={patientSearchDisabled}
              onClick={parent.toggleSearchDialog}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      },
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "apptDate",
      label: "Appointment Date",
      type: "date",
      required: true,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "startTimeString",
      label: "Start Time",
      type: "time",
      required: true,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "length",
      label: "Duration",
      type: "numberformat",
      required: true,
      InputProps: {
        endAdornment: <InputAdornment position="end">min</InputAdornment>
      },
      inputProps: { maxLength: "3" },
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "resourceId",
      optionKey: "resource",
      label: "Resource",
      type: "select",
      options: parent.resourceOptions,
      required: true,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "typeId",
      optionKey: "type",
      label: "Appointment Type",
      type: "select",
      options: parent.typeOptions,
      required: true,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "statusId",
      optionKey: "status",
      label: "Appointment Status",
      type: "select",
      options: parent.statusOptions,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "providerId",
      optionKey: "providerName",
      label: "Appointment Provider",
      type: "select",
      options: parent.providerOptions,
      gridItemProps: { xs: 12, sm: 6 }
    },
    {
      name: "notes",
      label: "Appointment Notes",
      type: "textarea"
    }
  ];
};

export default FormModel;
