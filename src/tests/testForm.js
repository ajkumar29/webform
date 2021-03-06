export const testForm = {
  title: "User Register Form",
  doneMessage: "Thank you. You will recieve an email shortly",
  pages: [
    {
      title: "User",
      id: "user",
      fields: [
        {
          label: "Name",
          id: "name",
          component: "textbox",
          required: true,
          validation: {
            type: "text",
          },
          placeholderText: "Enter name",
        },
        {
          label: "Role",
          id: "role",
          component: "dropdown",
          data: [
            "software engineer",
            "product owner",
            "scrum master",
            "testing engineer",
            "Designer",
          ],
          placeholderText: "Please select your role",
          required: true,
        },
        {
          label: "Email",
          id: "email",
          component: "textbox",
          required: true,
          validation: {
            type: "email",
          },
          placeholderText: "Enter email address",
        },
        {
          label: "Password",
          id: "password",
          component: "textbox",
          required: true,
          validation: {
            type: "password",
            validRegex: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}",
            errorMessage:
              "Password must be atleast 10 characters. It must have atleast 1 number, 1 upper case and 1 lower case letter.",
          },
          placeholderText: "Create a password",
        },
      ],
    },
    {
      title: "Privacy",
      id: "privacy",
      fields: [
        {
          component: "checkbox",
          id: "update-tick",
          label: "Recieve updates...",
        },
        {
          component: "checkbox",
          id: "comms-tick",
          label: "Recieve communications...",
        },
        {
          component: "checkbox",
          id: "accurate-tick",
          label: "Info is accurate...",
          required: true,
        },
      ],
    },
  ],
};
