import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';


export const useAddContact = ({ contacts, setContacts }) => {
  
  
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
  const handleAddContact = ({ name, number }) => {
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

  return { contacts, handleAddContact };
};
