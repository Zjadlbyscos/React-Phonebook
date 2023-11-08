import { useState } from 'react';


export const useFilterContact = () => {
  const [filter, setFilter] = useState('');
  const [contacts] = useState([]);

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  return { filter, handleFilterChange, getFilteredContacts };
};

