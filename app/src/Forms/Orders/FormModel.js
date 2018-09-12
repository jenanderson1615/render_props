const FormModel = [
  {
    name: "patientName",
    label: "Patient",
    type: "text",
    placeholder: "Select for patient or Leave Blank",
    InputProps: { readOnly: true },
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "orderTypeId",
    label: "Type",
    type: "select",
    placeholder: "Order Type",
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "description",
    label: "Short Description",
    type: "text",
    required: true
  },
  {
    name: "longDescription",
    label: "Long Description",
    type: "textarea"
  },
  {
    name: "providerId",
    label: "Provider",
    type: "select",
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "statusId",
    label: "Status",
    type: "select",
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "officeId",
    label: "Office",
    type: "select",
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "incidentId",
    label: "Incident",
    type: "select",
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "assignedToUserId",
    label: "Assigned To",
    type: "select",
    required: true,
    options: [],
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "dueDate",
    label: "Due",
    type: "date",
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "urgent",
    label: "Urgent Order",
    type: "checkbox",
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "notes",
    label: "Order Notes",
    type: "textarea"
  }
];

export default FormModel;
