import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addNewContacts,
  delContacts,
} from 'api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { thunkAPI }) => {
    try {
      const { data } = await getAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addNewContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
   async (id, { rejectWithValue }) => {
    try {
      const { data } = await delContacts(id);
      return data;
    } catch (error) {
       return rejectWithValue(error.message);
    }
  }
)
