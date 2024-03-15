import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    const normalizedFilter = filter.filter.toLowerCase();
// return contacts.contacts
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);



