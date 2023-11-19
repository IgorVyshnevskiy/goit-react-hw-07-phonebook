import { useDeleteContactMutation } from 'redux/contacts';
import { Contacts, Button } from './ContactsElementList.styled';
import { RotatingLines } from 'react-loader-spinner';

const ContactsElementList = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Contacts>
      {name}: {number}
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? (
          <RotatingLines strokeColor="#f27b77" width="12" />
        ) : (
          'Delete'
        )}
      </Button>
    </Contacts>
  );
};

export default ContactsElementList;
