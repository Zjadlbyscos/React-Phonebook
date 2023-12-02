import { useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useAddContact = ({ contacts, setContacts }) => {
  useEffect(() => {
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
