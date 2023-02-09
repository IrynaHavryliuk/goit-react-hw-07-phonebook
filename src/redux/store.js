import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contactsReducers';
import { middleware } from './contacts/contactsMiddleware';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;