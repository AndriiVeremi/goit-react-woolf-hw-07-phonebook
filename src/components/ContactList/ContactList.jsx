import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectFilteredContacts } from 'store/selectors';
import { useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'store/thunksOperations';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deletContacts = id => {
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
            deleteContacts={deletContacts}
          />
        ))
      ) : (
        <h2>not contacts</h2>
      )}
    </List>
  );
};
