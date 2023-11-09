export const useDeleteContact = ({ contacts, setContacts }) => {
  const handleDeleteContact = contactId => {
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

  return { contacts, handleDeleteContact };
};
