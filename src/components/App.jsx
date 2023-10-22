import React, { Component } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactForm/Filter/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
      name: '',
      number: '',
    };
  }
  handleContactSubmit = ({ name, number }) => {
    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
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

    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  getFilteredContacts() {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  }
  render() {
    return (
      <div>
        <h1>Książka telefoniczna</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />

        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        ></Filter>
        <Contacts contacts={this.getFilteredContacts()} />
      </div>
    );
  }


}

export default App;
