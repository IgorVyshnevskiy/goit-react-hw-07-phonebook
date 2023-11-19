import { useState } from 'react';

import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNumberId = nanoid(4);
  const inputNameId = nanoid(4);

  const hendelInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const hendelSubmit = event => {
    event.preventDefault();
    const addContact = {
      id: nanoid(4),
      name,
      number,
    };
    onSubmitForm(addContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hendelSubmit}>
      <Label htmlFor={inputNameId}>Name</Label>
      <Input
        id={inputNameId}
        type="text"
        name="name"
        
        value={name}
        onChange={hendelInputChange}
        required
      />
      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        id={inputNumberId}
        type="tel"
        name="number"
        
        value={number}
        onChange={hendelInputChange}
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
