import { getAllContacts, addNewContacts, deleteContacts } from 'api/contactsApi';
import {
  pendingAction,
  fulfilledAction,
  rejectedAction,
} from './contactsSlice';

export const getAllContactsThunk = () => {
  return async dispatch => {
    try {
      dispatch(pendingAction());
      const data = await getAllContacts();
      dispatch(fulfilledAction(data));
    } catch (error) {
      dispatch(rejectedAction(error));
    }
  };
};

export const addContactsThunk = contact => {
  return async dispatch => {
    try {
      dispatch(pendingAction());
      const data = await addNewContacts(contact);
      dispatch(fulfilledAction(data));
    } catch (error) {
      dispatch(rejectedAction(error));
    }
  };
};

export const deleteContactsThunk = id => {
  return async dispatch => {
    try {
      dispatch(pendingAction());
      const data = await deleteContacts(id);
      dispatch(fulfilledAction(data));
    } catch (error) {
      dispatch(rejectedAction(error));
    }
  };
};
