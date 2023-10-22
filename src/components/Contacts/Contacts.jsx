import React from 'react';

const Contacts = ({ contacts,onContactDelete }) => {
  return (

    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name} - {contact.number}
         <button onClick={() => onContactDelete(contact.id)}>Usuń</button>
         </li>
      ))}
    </ul>
  );
};

export default Contacts;