import { useState, useEffect } from 'react';

export const useFilterContact = ({ contacts }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFilter('');
  }, [contacts]);

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  return { filter, handleFilterChange, getFilteredContacts };
};
