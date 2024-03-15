import { createSlice} from '@reduxjs/toolkit';
// import startContacts from '../data/contacts.json';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: startContacts },
//   reducers: {
//     createContacts: {
//       reducer: (state, { payload }) => {
//         state.contacts.push(payload);
//       },
//       prepare(newContact) {
//         return {
//           payload: { id: nanoid(), ...newContact },
//         };
//       },
//     },
//     delContacts: (state, { payload }) => {
//       state.contacts = state.contacts.filter(item => item.id !== payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase()

//   }
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    error: null,
    contacts: null,
  },
  reducers: {
    pendingAction: state => {
      state.isLoading = true;
      state.error = null;
    },
    fulfilledAction: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    rejectedAction: (state, { payload }) => {
      state.error = payload.message;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { pendingAction, fulfilledAction, rejectedAction } = contactsSlice.actions;
