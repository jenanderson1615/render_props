const TestFormModel = [
  {
    type: "text",
    name: "first",
    label: "First",
    required: true
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone 1",
    required: true
  },
  {
    type: "date",
    name: "dob",
    label: "Birthdate",
    required: true
  },
  {
    type: "select",
    name: "state",
    label: "State",
    options: [
      { id: "NE", name: "Nebraska" },
      { id: "SD", name: "South Dakota" },
      { id: "IA", name: "Iowa" }
    ],
    required: true
  },
  {
    type: "textarea",
    name: "comments",
    label: "Comments",
    rows: 5,
    placeholder: "Enter some comments...",
    required: true
  },
  {
    type: "checkbox",
    name: "urgent",
    label: "Urgent",
    isBool: true,
    required: true
  },
  {
    type: "radio",
    name: "server",
    label: "Server",
    options: [
      { id: "1", name: "PHP" },
      { id: "2", name: "Ruby" },
      { id: "3", name: "Python" }
    ],
    required: true
  }
];

export default TestFormModel;
