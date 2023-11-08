import { useState } from 'react';

const useDeleteContact = (initialContacts) => {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (contactId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this contact?');

    if (shouldDelete) {
      const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
      setContacts(updatedContacts);
    }
  };

  return { contacts, deleteContact };
};

export default useDeleteContact;