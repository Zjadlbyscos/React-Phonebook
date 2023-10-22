import React from 'react';
import s from "./Contacts.module.css"

const Contacts = ({ contacts,onContactDelete }) => {
  return (

    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.contact} key={contact.id}>{contact.name} - {contact.number}
         <button className={s.btn} onClick={() => onContactDelete(contact.id)}>Delete</button>
         </li>
      ))}
    </ul>
  );
};

export default Contacts;