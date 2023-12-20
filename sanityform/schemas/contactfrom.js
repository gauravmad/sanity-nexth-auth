// Example schema (schema.js)
export default {
    name: 'contactfrom',
    title: 'Contact Message',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
  };
  