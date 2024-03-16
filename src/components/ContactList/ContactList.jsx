import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'store/selectors';
import { fetchContacts, deleteContact } from 'store/thunksOperations';
import { List } from './ContactList.styled';

export const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const removeContacts = id => {
    dispatch(deleteContact(id));
    Notify.success('Contact successfully deleted.');
  };

  return (
    <List>
      {contacts ? (
        contacts.map(item => (
          <ContactItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.phone}
            deleteContacts={removeContacts}
          />
        ))
      ) : (
        <h2>not contacts</h2>
      )}
    </List>
  );
};
