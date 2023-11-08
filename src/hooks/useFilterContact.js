import { useState } from 'react';

const useFilterContact = () => {
  const [filter, setFilter] = useState('');

  const getFilteredContacts = (contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return { filter, setFilter, getFilteredContacts };
};

export default useFilterContact;
