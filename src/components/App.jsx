import React, { Component } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';

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

  render() {
    return (
      <div>
        <h1>Książka telefoniczna</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />
        <input
          type="text"
          placeholder="Wyszukaj"
          onChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <Contacts contacts={this.getFilteredContacts()} />
      </div>
    );
  }

  getFilteredContacts() {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  }
}

export default App;
