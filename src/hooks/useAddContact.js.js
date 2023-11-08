import { useState } from 'react';
import { nanoid } from 'nanoid';


const useAddContact = ()=>{
    const [contacts, setContacts] = useState([]);
   
    const handleContactSubmit = ({ name, number }) => {
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
  return { contacts, handleContactSubmit };
}
export default useAddContact;