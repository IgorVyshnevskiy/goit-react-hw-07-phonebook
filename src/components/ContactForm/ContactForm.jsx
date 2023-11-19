import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contacts';
import { toast } from 'react-toastify';

import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

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

  const addContact = data => {
    const contactNames = contacts.map(contact => contact.name.toLowerCase());

    if (!contactNames.includes(data.name.toLowerCase())) {
      createContact(data);
      reset();
      toast.success(`Contact, ${data.name} successfully added`);
    } else {
      toast.error(`${data.name} is already in contacts.`);
    }
  };

  const hendelSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(4),
      name,
      number,
    };
    addContact(contact);
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={hendelInputChange}
        required
      />
      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        id={inputNumberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={hendelInputChange}
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
