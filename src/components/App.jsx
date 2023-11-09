import React, { useState } from 'react';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { useAddContact } from 'hooks/useAddContact.js';
import { useDeleteContact } from 'hooks/useDeleteContact';
import { useFilterContact } from 'hooks/useFilterContact';

import style from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Anthony Kiedis', number: '459-12-56' },
    { id: 'id-2', name: 'Chad Smith', number: '645-17-79' },
    { id: 'id-3', name: 'Damiano David', number: '645-17-79' },
  ]);

  const { handleAddContact } = useAddContact({ contacts, setContacts });
  const { handleDeleteContact } = useDeleteContact({ contacts, setContacts });
  const { filter, handleFilterChange, getFilteredContacts } =
    useFilterContact(contacts);

  return (
    <div className={style.form}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} setContacts={setContacts} />

      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <Contacts contacts={contacts} onContactDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
