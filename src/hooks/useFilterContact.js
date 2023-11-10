import { useState, useEffect } from 'react';

export const useFilterContact = ({ contacts, setFilteredContacts }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFilter('');
  }, [contacts]);

  useEffect(() => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredContacts(filteredContacts);
    // eslint-disable-next-line
  }, [contacts, filter]);

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  return { filter, handleFilterChange };
};
