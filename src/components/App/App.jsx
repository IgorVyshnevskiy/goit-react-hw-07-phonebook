import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  setFilter,
  getContact,
  getFilter,
} from 'redux/contactSlice';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Message from '../Message';

import { Container, Title, SubTitle } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const formSubmitHendel = data => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      dispatch(increment(data));
    }
  };

  const deleteContacts = contactId => {
    dispatch(decrement(contactId));
  };

  const changeFilter = event => {
    const value = event.currentTarget.value;
    dispatch(setFilter(value));
  };

  const filterContact = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const filterdContact = filterContact();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmitForm={formSubmitHendel} />
      <SubTitle>Contacts</SubTitle>
      <Filter onFilter={changeFilter} />
      {contacts.length === 0 ? (
        <Message />
      ) : (
        <ContactList contacts={filterdContact} onDelete={deleteContacts} />
      )}
    </Container>
  );
};

export default App;

