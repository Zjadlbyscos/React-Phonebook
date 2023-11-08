import React, { useState, useEffect } from 'react';

import useAddContact from 'hooks/useAddContact.js';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import style from './App.module.css';

const App = () => {
  const [contacts, handleContactSubmit] = useAddContact([
    { id: 'id-1', name: 'Anthony Kiedis', number: '459-12-56' },
    { id: 'id-2', name: 'Chad Smith', number: '645-17-79' },
    { id: 'id-3', name: 'Damiano David', number: '645-17-79' },
  ]);

  const [filter, setFilter] = useState('');


  useEffect(() => {
    // Load contacts from localStorage if they exist
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      handleContactSubmit(JSON.parse(savedContacts));
    }
  }, [handleContactSubmit]);

  useEffect(() => {
    //component dudUpdate
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 

  

  return (
    <div className={style.form}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleContactSubmit} />

      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <Contacts
        contacts={getFilteredContacts()}
        onContactDelete={handleContactDelete}
      />
    </div>
  );
};

export default App;
