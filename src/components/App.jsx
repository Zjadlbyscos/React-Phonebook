import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import useAddContact from 'hooks/useAddContact.js';
import useDeleteContact from 'hooks/useDeleteContact';
import useFilterContact from 'hooks/useFilterContact';

import style from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Anthony Kiedis', number: '459-12-56' },
    { id: 'id-2', name: 'Chad Smith', number: '645-17-79' },
    { id: 'id-3', name: 'Damiano David', number: '645-17-79' },
  ]);

  const [filter, setFilter] = useState('');


  useEffect(() => {
    // Load contacts from localStorage if they exist
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    //component dudUpdate
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactSubmit = ({ name, number }) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert('A contact with this name already exists!');
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, contact]);
  };

  const handleContactDelete = contactId => {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this contact?'
    );

    if (shouldDelete) {
      const updatedContacts = contacts.filter(
        contact => contact.id !== contactId
      );

      setContacts(updatedContacts);
    }
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

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
