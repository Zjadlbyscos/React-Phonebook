import { useState } from 'react';

const useFilterContact = (initialFilter = '') => {
  const [filter, setFilter] = useState(initialFilter);

  const getFilteredContacts = (contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return { filter, setFilter, getFilteredContacts };
};

export default useFilterContact;
