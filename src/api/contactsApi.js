import axios from 'axios';

axios.defaults.baseURL = 'https://64859451a795d24810b716bb.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts/');
  return data;
};

export const addNewContacts = async contact => {
  const { data } = await axios.post('/contacts/', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
